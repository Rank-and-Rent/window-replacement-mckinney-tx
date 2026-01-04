import { NextRequest } from 'next/server';

interface RateLimitResult { allowed: boolean; remaining: number; resetTime: number; }

class ApiRateLimiter {
  private requests = new Map<string, { count: number; resetTime: number }>();
  private readonly limit = 5;
  private readonly windowMs = 15 * 60 * 1000;

  isAllowed(request: NextRequest): RateLimitResult {
    const ip = this.getClientIP(request);
    const now = Date.now();
    this.cleanup(now - this.windowMs);
    const current = this.requests.get(ip);
    if (!current || current.resetTime <= now) {
      const resetTime = now + this.windowMs;
      this.requests.set(ip, { count: 1, resetTime });
      return { allowed: true, remaining: this.limit - 1, resetTime };
    }
    if (current.count >= this.limit) {
      return { allowed: false, remaining: 0, resetTime: current.resetTime };
    }
    current.count++;
    this.requests.set(ip, current);
    return { allowed: true, remaining: this.limit - current.count, resetTime: current.resetTime };
  }

  private getClientIP(request: NextRequest): string {
    return request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
           request.headers.get('x-real-ip') ||
           request.headers.get('cf-connecting-ip') || 'unknown';
  }

  private cleanup(windowStart: number): void {
    Array.from(this.requests.entries()).forEach(([key, value]) => {
      if (value.resetTime <= windowStart) this.requests.delete(key);
    });
  }
}

export const apiRateLimiter = new ApiRateLimiter();

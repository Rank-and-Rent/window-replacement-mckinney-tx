'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, locationsData, brandsData } from '@/data'
import styles from './header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    } else if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setMobileActiveDropdown(null)
  }

  // Split services into windows, doors, and materials
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')
  const materialServices = servicesData.filter(s => s.category === 'Materials')
  
  // Top 8 locations for dropdown (main city first, then most populous)
  const topLocations = locationsData.slice(0, 8)

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Home Window Replacement Service of Arlington TX"
              width={200}
              height={60}
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {/* Windows Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('windows')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={styles.navLink}
                onKeyDown={(e) => handleKeyDown(e, 'windows')}
                aria-expanded={activeDropdown === 'windows'}
                aria-haspopup="true"
              >
                Windows
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {activeDropdown === 'windows' && (
                <div 
                  className={styles.dropdownMenu}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {windowServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.route}
                      className={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/windows"
                    className={`${styles.dropdownItem} ${styles.viewAll}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All Windows
                  </Link>
                </div>
              )}
            </div>

            {/* Materials Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('materials')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={styles.navLink}
                onKeyDown={(e) => handleKeyDown(e, 'materials')}
                aria-expanded={activeDropdown === 'materials'}
                aria-haspopup="true"
              >
                Materials
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {activeDropdown === 'materials' && (
                <div
                  className={styles.dropdownMenu}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {materialServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.route}
                      className={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/windows"
                    className={`${styles.dropdownItem} ${styles.viewAll}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All Materials
                  </Link>
                </div>
              )}
            </div>

            {/* Doors Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('doors')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={styles.navLink}
                onKeyDown={(e) => handleKeyDown(e, 'doors')}
                aria-expanded={activeDropdown === 'doors'}
                aria-haspopup="true"
              >
                Doors
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {activeDropdown === 'doors' && (
                <div 
                  className={styles.dropdownMenu}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {doorServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.route}
                      className={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/doors"
                    className={`${styles.dropdownItem} ${styles.viewAll}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All Doors
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('locations')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={styles.navLink}
                onKeyDown={(e) => handleKeyDown(e, 'locations')}
                aria-expanded={activeDropdown === 'locations'}
                aria-haspopup="true"
              >
                Locations
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {activeDropdown === 'locations' && (
                <div 
                  className={styles.dropdownMenu}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {topLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={location.route}
                      className={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {location.name}
                    </Link>
                  ))}
                  <Link
                    href="/locations"
                    className={`${styles.dropdownItem} ${styles.viewAll}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All {locationsData.length} Locations
                  </Link>
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('brands')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={styles.navLink}
                onKeyDown={(e) => handleKeyDown(e, 'brands')}
                aria-expanded={activeDropdown === 'brands'}
                aria-haspopup="true"
              >
                Brands
                <svg className={styles.dropdownArrow} viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              {activeDropdown === 'brands' && (
                <div 
                  className={styles.dropdownMenu}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {brandsData.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={brand.route}
                      className={styles.dropdownItem}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                  <Link
                    href="/brands"
                    className={`${styles.dropdownItem} ${styles.viewAll}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    View All Brands
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </nav>

          <div className={styles.headerActions}>
            <a href="tel:817-592-8870" className={styles.phone}>
              <span className={styles.phoneLabel}>Call Now</span>
              <span className={styles.phoneNumber}>817-592-8870</span>
            </a>
            <Link href="/contact" className={styles.ctaButton}>
              Free Estimate
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayActive : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <nav className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileLogo} onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Home Window Replacement Service of Arlington TX"
              width={150}
              height={40}
              className={styles.mobileLogoImage}
            />
          </Link>
          <button
            className={styles.mobileClose}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          {/* Windows Accordion */}
          <div className={styles.mobileDropdown}>
            <button 
              className={`${styles.mobileDropdownToggle} ${mobileActiveDropdown === 'windows' ? styles.mobileDropdownToggleActive : ''}`}
              onClick={() => toggleMobileDropdown('windows')}
              aria-expanded={mobileActiveDropdown === 'windows'}
            >
              Windows
              <svg className={styles.mobileDropdownArrow} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`${styles.mobileDropdownContent} ${mobileActiveDropdown === 'windows' ? styles.mobileDropdownContentOpen : ''}`}>
              {windowServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.route}
                  className={styles.mobileDropdownItem}
                  onClick={closeMobileMenu}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/windows"
                className={`${styles.mobileDropdownItem} ${styles.mobileViewAll}`}
                onClick={closeMobileMenu}
              >
                View All Windows
              </Link>
            </div>
          </div>

          {/* Materials Accordion */}
          <div className={styles.mobileDropdown}>
            <button
              className={`${styles.mobileDropdownToggle} ${mobileActiveDropdown === 'materials' ? styles.mobileDropdownToggleActive : ''}`}
              onClick={() => toggleMobileDropdown('materials')}
              aria-expanded={mobileActiveDropdown === 'materials'}
            >
              Materials
              <svg className={styles.mobileDropdownArrow} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`${styles.mobileDropdownContent} ${mobileActiveDropdown === 'materials' ? styles.mobileDropdownContentOpen : ''}`}>
              {materialServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.route}
                  className={styles.mobileDropdownItem}
                  onClick={closeMobileMenu}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/windows"
                className={`${styles.mobileDropdownItem} ${styles.mobileViewAll}`}
                onClick={closeMobileMenu}
              >
                View All Materials
              </Link>
            </div>
          </div>

          {/* Doors Accordion */}
          <div className={styles.mobileDropdown}>
            <button 
              className={`${styles.mobileDropdownToggle} ${mobileActiveDropdown === 'doors' ? styles.mobileDropdownToggleActive : ''}`}
              onClick={() => toggleMobileDropdown('doors')}
              aria-expanded={mobileActiveDropdown === 'doors'}
            >
              Doors
              <svg className={styles.mobileDropdownArrow} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`${styles.mobileDropdownContent} ${mobileActiveDropdown === 'doors' ? styles.mobileDropdownContentOpen : ''}`}>
              {doorServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.route}
                  className={styles.mobileDropdownItem}
                  onClick={closeMobileMenu}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/doors"
                className={`${styles.mobileDropdownItem} ${styles.mobileViewAll}`}
                onClick={closeMobileMenu}
              >
                View All Doors
              </Link>
            </div>
          </div>

          {/* Locations Accordion */}
          <div className={styles.mobileDropdown}>
            <button 
              className={`${styles.mobileDropdownToggle} ${mobileActiveDropdown === 'locations' ? styles.mobileDropdownToggleActive : ''}`}
              onClick={() => toggleMobileDropdown('locations')}
              aria-expanded={mobileActiveDropdown === 'locations'}
            >
              Locations
              <svg className={styles.mobileDropdownArrow} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`${styles.mobileDropdownContent} ${mobileActiveDropdown === 'locations' ? styles.mobileDropdownContentOpen : ''}`}>
              {topLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.route}
                  className={styles.mobileDropdownItem}
                  onClick={closeMobileMenu}
                >
                  {location.name}
                </Link>
              ))}
              <Link
                href="/locations"
                className={`${styles.mobileDropdownItem} ${styles.mobileViewAll}`}
                onClick={closeMobileMenu}
              >
                View All {locationsData.length} Locations
              </Link>
            </div>
          </div>

          {/* Brands Accordion */}
          <div className={styles.mobileDropdown}>
            <button 
              className={`${styles.mobileDropdownToggle} ${mobileActiveDropdown === 'brands' ? styles.mobileDropdownToggleActive : ''}`}
              onClick={() => toggleMobileDropdown('brands')}
              aria-expanded={mobileActiveDropdown === 'brands'}
            >
              Brands
              <svg className={styles.mobileDropdownArrow} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`${styles.mobileDropdownContent} ${mobileActiveDropdown === 'brands' ? styles.mobileDropdownContentOpen : ''}`}>
              {brandsData.map((brand) => (
                <Link
                  key={brand.slug}
                  href={brand.route}
                  className={styles.mobileDropdownItem}
                  onClick={closeMobileMenu}
                >
                  {brand.name}
                </Link>
              ))}
              <Link
                href="/brands"
                className={`${styles.mobileDropdownItem} ${styles.mobileViewAll}`}
                onClick={closeMobileMenu}
              >
                View All Brands
              </Link>
            </div>
          </div>

          {/* Regular Links */}
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Footer */}
        <div className={styles.mobileMenuFooter}>
          <a href="tel:817-592-8870" className={styles.mobilePhoneButton}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call: 817-592-8870
          </a>
          <Link href="/contact" className={styles.mobileEstimateButton} onClick={closeMobileMenu}>
            Get Free Estimate
          </Link>
        </div>
      </nav>

      {/* Floating Mobile Call Button */}
      <a 
        href="tel:817-592-8870" 
        className={styles.floatingCallButton}
        aria-label="Call Now"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>
    </>
  )
}

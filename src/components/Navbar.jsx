import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <img src="/navbar.svg" alt="NUST Logo" className="logo-image" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/journey" 
              className={`nav-link ${location.pathname === '/journey' ? 'active' : ''}`}
            >
              Journey
            </Link>
            <Link 
              to="/testimonials" 
              className={`nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
            >
              Testimonials
            </Link>
            <Link to="/auth" className="btn-primary nav-cta">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            to="/journey" 
            className={`mobile-nav-link ${location.pathname === '/journey' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Journey
          </Link>
          <Link 
            to="/testimonials" 
            className={`mobile-nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Testimonials
          </Link>
          <Link to="/auth" className="btn-primary mobile-cta" onClick={closeMobileMenu}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

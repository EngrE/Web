import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
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
    setOpenMobileDropdown(null);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <img src="/navbar.svg" alt="NUST Logo" className="logo-image" />
            </Link>
          </div>

          <div className="navbar-links">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
{/* 
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
 */}

            <div
                className="nav-dropdown"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link dropdown-toggle">
                  About
                  <ChevronDown
                    size={16}
                    className={`dropdown-icon ${openDropdown === 'about' ? 'rotate' : ''}`}
                  />
                </button>

                <div className={`dropdown-menu ${openDropdown === 'about' ? 'show' : ''}`}>
                  <Link to="/about" className="dropdown-item">About</Link>
                  <Link to="/journey" className="dropdown-item">Journey</Link>
                  <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
                </div>
              </div>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link dropdown-toggle">
                Services
                <ChevronDown
                  size={16}
                  className={`dropdown-icon ${openDropdown === 'services' ? 'rotate' : ''}`}
                />
              </button>

              <div className={`dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
                <Link to="/services/TraumaPrograms" className="dropdown-item">Trauma programs</Link>
                <Link to="/services/Sessions" className="dropdown-item">Sessions</Link>
                <Link to="/services/Activities" className="dropdown-item">Activities</Link>
              </div>
            </div>

            <div
                className="nav-dropdown"
                onMouseEnter={() => setOpenDropdown('ptsd-trauma')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link dropdown-toggle">
                  PTSD & Trauma
                  <ChevronDown
                    size={16}
                    className={`dropdown-icon ${openDropdown === 'ptsd-trauma' ? 'rotate' : ''}`}
                  />
                </button>

                <div className={`dropdown-menu ${openDropdown === 'ptsd-trauma' ? 'show' : ''}`}>
                  <Link to="/ptsd-trauma/understanding" className="dropdown-item">
                    Understanding PTSD & Trauma 
                  </Link>
                  <Link to="/ptsd-trauma/managing" className="dropdown-item">
                    Managing PTSD & Trauma
                  </Link>
                  <Link to="/ptsd-trauma/dealing" className="dropdown-item">
                    Dealing with a mental crisis situation
                  </Link>
                  <Link to="/ptsd-trauma/overcoming" className="dropdown-item">
                    Overcoming PTSD & Trauma
                  </Link>
                  <Link to="/ptsd-trauma/notready" className="dropdown-item">
                    Not ready for changes yet?
                  </Link>
                </div>
              </div>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link dropdown-toggle">
                Resources
                <ChevronDown
                  size={16}
                  className={`dropdown-icon ${openDropdown === 'resources' ? 'rotate' : ''}`}
                />
              </button>

              <div className={`dropdown-menu ${openDropdown === 'resources' ? 'show' : ''}`}>
                <Link to="/blog" className="dropdown-item">Blog</Link>
                <Link to="/guides" className="dropdown-item">Downloads</Link>
                <Link to="/faq" className="dropdown-item">FAQ</Link>
              </div>
            </div>

            <Link to="/auth" className="btn-primary nav-cta">
              Book Now
            </Link>
          </div>

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

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>

{/*           <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
            About
          </Link>
 */}


          <button
            className="mobile-dropdown-toggle"
            onClick={() =>
              setOpenMobileDropdown(
                openMobileDropdown === 'about' ? null : 'about'
              )
            }
          >
            About
            <ChevronDown
              size={16}
              className={`dropdown-icon ${openMobileDropdown === 'about' ? 'rotate' : ''}`}
            />
          </button>

          <div className={`mobile-submenu ${openMobileDropdown === 'about' ? 'show' : ''}`}>
            <Link to="/about" className="mobile-submenu-link" onClick={closeMobileMenu}>
              About
            </Link>
            <Link to="/journey" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Journey
            </Link>
            <Link to="/testimonials" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Testimonials
            </Link>
          </div>


          <button
            className="mobile-dropdown-toggle"
            onClick={() =>
              setOpenMobileDropdown(
                openMobileDropdown === 'services' ? null : 'services'
              )
            }
          >
            Services
            <ChevronDown
              size={16}
              className={`dropdown-icon ${openMobileDropdown === 'services' ? 'rotate' : ''}`}
            />
          </button>

          <div className={`mobile-submenu ${openMobileDropdown === 'services' ? 'show' : ''}`}>
            <Link to="/services/web" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Web Design
            </Link>
            <Link to="/services/branding" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Branding
            </Link>
            <Link to="/services/strategy" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Strategy
            </Link>
          </div>

          <button
            className="mobile-dropdown-toggle"
            onClick={() =>
              setOpenMobileDropdown(
                openMobileDropdown === 'PTSD&Trauma' ? null : 'PTSD&Trauma'
              )
            }
          >
            PTSD & Trauma
            <ChevronDown
              size={16}
              className={`dropdown-icon ${openMobileDropdown === 'PTSD&Trauma' ? 'rotate' : ''}`}
            />
          </button>

          <div className={`mobile-submenu ${openMobileDropdown === 'PTSD&Trauma' ? 'show' : ''}`}>
            <Link to="/PTSD&Trauma/basic" className="mobile-submenu-link" onClick={closeMobileMenu}>
               Understanding PTSD & trauma
            </Link>
            <Link to="/PTSD&Trauma/pro" className="mobile-submenu-link" onClick={closeMobileMenu}>
               Managing PTSD & trauma
            </Link>
            <Link to="/PTSD&Trauma/premium" className="mobile-submenu-link" onClick={closeMobileMenu}>
               Dealing with a mental crisis situation
            </Link>
            <Link to="/PTSD&Trauma/premium" className="mobile-submenu-link" onClick={closeMobileMenu}>
               Overcoming PTSD & trauma
            </Link>
            <Link to="/PTSD&Trauma/premium" className="mobile-submenu-link" onClick={closeMobileMenu}>
               Not ready for changes yet?
            </Link>
          </div>

          <button
            className="mobile-dropdown-toggle"
            onClick={() =>
              setOpenMobileDropdown(
                openMobileDropdown === 'resources' ? null : 'resources'
              )
            }
          >
            Resources
            <ChevronDown
              size={16}
              className={`dropdown-icon ${openMobileDropdown === 'resources' ? 'rotate' : ''}`}
            />
          </button>

          <div className={`mobile-submenu ${openMobileDropdown === 'resources' ? 'show' : ''}`}>
            <Link to="/blog" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Blog
            </Link>
            <Link to="/guides" className="mobile-submenu-link" onClick={closeMobileMenu}>
              Guides
            </Link>
            <Link to="/faq" className="mobile-submenu-link" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </div>

          <Link to="/auth" className="btn-primary mobile-cta" onClick={closeMobileMenu}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
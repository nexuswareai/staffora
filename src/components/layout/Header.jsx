import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import logoImage from '../../assets/logo.png'; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    if (mobileMenuOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const headerBg = isScrolled || !isHomePage ? 'bg-white shadow-md py-2 md:py-3' : 'bg-transparent py-4 md:py-5';
  const textColor = isScrolled || !isHomePage ? 'text-brand-900' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo Area - FIXED ALIGNMENT */}
        <Link to="/" className="flex items-center z-50">
          <img 
            src={logoImage} 
            alt="STAFFORA Logo" 
            /* Constraining by height (h-14 to h-20) keeps the header slim and aligns the nav perfectly */
            className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-opacity duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 mt-2">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent-500 ${
                    location.pathname === link.path ? 'text-accent-500' : textColor
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button to="/contact" variant={isScrolled || !isHomePage ? 'primary' : 'outlineWhite'} className="ml-4">
            Hire Talent
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-8 h-8 text-brand-900" />
          ) : (
            <Menu className={`w-8 h-8 ${textColor}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <ul className="flex flex-col gap-6 items-center mt-8">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <Link 
                    to={link.path}
                    className={`block py-3 text-xl font-serif font-semibold border-b border-gray-100 ${
                      location.pathname === link.path ? 'text-accent-500' : 'text-brand-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10 flex flex-col gap-4">
              <Button to="/contact" variant="primary" className="w-full">
                Hire Talent
              </Button>
              <Button to="/careers" variant="outline" className="w-full">
                Explore Opportunities
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

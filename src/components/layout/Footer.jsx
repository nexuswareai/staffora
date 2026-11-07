import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logoImage from '../../assets/logo.png'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info - UPDATED TO USE IMAGE */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img 
                src={logoImage} 
                alt="STAFFORA Logo" 
                /* Constraining by height ensures the footer spacing remains clean */
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed pr-4 mt-2">
              A specialist recruitment firm committed to connecting the right talent with the right opportunities internationally.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-accent-500 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Locations</h4>
            <ul className="space-y-4">
              {siteConfig.contact.locations.map(loc => (
                <li key={loc} className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-accent-500 shrink-0" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

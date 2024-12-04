import React from 'react';
import { Menu, X, Globe2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">EThub</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#mission">Mission</NavLink>
            <NavLink href="#founder">Founder</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#mission">Mission</MobileNavLink>
            <MobileNavLink href="#founder">Founder</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
          <div className="px-4 py-3 space-y-2">
            <button className="w-full px-4 py-2 text-blue-600 hover:text-blue-700 font-medium">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-700 hover:text-blue-600 font-medium">
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
    {children}
  </a>
);

export default Header;
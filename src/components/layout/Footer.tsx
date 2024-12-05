import React from 'react';
import { Globe2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold text-white">EThub</span>
            </div>
            <p className="text-gray-400 text-base">
              Connecting Ethiopian entrepreneurs with investors and expert professionals to build
              a stronger economic future.
            </p>
            <div className="flex space-x-6">
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="linkedin" />
              <SocialLink href="#" icon="facebook" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Platform
                </h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#about">About</FooterLink>
                  <FooterLink href="#mission">Mission</FooterLink>
                  <FooterLink href="#founder">Founder</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Get Started
                </h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#entrepreneur">Entrepreneurs</FooterLink>
                  <FooterLink href="#investor">Investors</FooterLink>
                  <FooterLink href="#expert">Experts</FooterLink>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <ContactInfo icon={<Mail className="h-5 w-5" />} text="contact@ethub.com" />
                </li>
                <li>
                  <ContactInfo icon={<Phone className="h-5 w-5" />} text="+251 911 234 567" />
                </li>
                <li>
                  <ContactInfo icon={<MapPin className="h-5 w-5" />} text="Addis Ababa, Ethiopia" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} EThub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <a href={href} className="text-gray-400 hover:text-gray-300">
    <span className="sr-only">{icon}</span>
    <div className="h-6 w-6" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-base text-gray-300 hover:text-white">
      {children}
    </a>
  </li>
);

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center">
    <span className="text-gray-400">{icon}</span>
    <span className="ml-3 text-base text-gray-300">{text}</span>
  </div>
);

export default Footer;
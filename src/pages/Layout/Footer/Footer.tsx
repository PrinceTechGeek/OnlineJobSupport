import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 mb-10 text-gray-200 py-12">
      <div className="container mx-auto px-6 py-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Apps and Extensions</h4>
            <ul className="space-y-2">
              <li>Mobile Apps</li>
              <li>Desktop Apps</li>
              <li>Developer Center</li>
              <li>Google Workspace Integration</li>
              <li>Microsoft 365 Integration</li>
              <li>Apps for Apple Watch</li>
              <li>Product Integrations</li>
              <li>Browser Extensions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>Training & Certification</li>
              <li>Academy</li>
              <li>Blog</li>
              <li>Knowledge Base</li>
              <li>Zia</li>
              <li>The Long Game</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <ul className="space-y-2">
              <li>User Community</li>
              <li>Customer Stories</li>
              <li>Influence</li>
              <li>Find a Partner</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Press</li>
              <li>Events</li>
              <li>Newsroom</li>
              <li>Branding Assets</li>
              <li>Service Status</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Sales</h4>
            <ul className="space-y-2">
              <li>Phone</li>
              <li>1800 103 1123</li>
              <li>1800 572 3535</li>
              <li>Email</li>
            </ul>
            <ul className="mt-4 space-y-2">
              <li>
                <p className="text-blue-600">
                  Support &gt;
                </p>
              </li>
              <li>
                <p className="text-blue-600">
                  Talk to Concierge &gt;
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <p
            className="text-gray-800 hover:text-blue-500 transition-all"
          >
            <FaFacebook className="text-2xl" />
          </p>
          <p
            className="text-gray-800 hover:text-blue-500 transition-all"
          >
            <FaTwitter className="text-2xl" />
          </p>
          <p
            className="text-gray-800 hover:text-blue-500 transition-all"
          >
            <FaYoutube className="text-2xl" />
          </p>
          <p
            className="text-gray-800 hover:text-blue-500 transition-all"
          >
            <FaLinkedin className="text-2xl" />
          </p>
          <p
            className="text-gray-800 hover:text-blue-500 transition-all"
          >
            <FaInstagram className="text-2xl" />
          </p>
        </div>
        <div className="border-t border-gray-300 mt-10 pt-6 text-center">
          <ul className="flex justify-center space-x-6 text-sm text-gray-300 mb-4">
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <p>Security</p>
            </li>
            <li>
              <p>Compliance</p>
            </li>
            <li>
              <p>Terms of Service</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
          </ul>
          <p className="text-sm text-gray-300">
            &copy;
            {' '}
            {year}
            {' '}
            Obudle. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

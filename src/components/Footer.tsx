"use client"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer top section */}
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-2xl font-bold text-gray-200">Company Name</h3>
            <p className="mt-2 text-gray-400">
              Your description or tagline goes here. This can be a short phrase that describes what your company does.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h4 className="text-xl font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-4">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h4 className="text-xl font-semibold text-gray-200">Contact Us</h4>
            <ul className="mt-4">
              <li className="text-gray-400">Email: info@company.com</li>
              <li className="text-gray-400">Phone: +1 234 567 890</li>
              <li className="text-gray-400">Address: 1234 Street Name, City, Country</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h4 className="text-xl font-semibold text-gray-200">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

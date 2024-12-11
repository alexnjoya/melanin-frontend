// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Logo from  '../../../public/assets/melanin.jpg'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-beige p-2 rounded">
            <Image
            alt='Melanin Logo'
            src={Logo}
            width={200}
            height={200}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500">
            About Us
          </a>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
          <a href="#team" className="hover:text-orange-500">
            Our Team
          </a>
          <a href="#faqs" className="hover:text-orange-500">
            FAQs
          </a>
          <a href="#blog" className="hover:text-orange-500">
            Blog
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </nav>

        {/* Search and Contact */}
        <div className="flex items-center mr-4 space-x-4">
          {/* Search Icon */}
          <div className="hidden md:block bg-orange-100 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
              />
            </svg>
          </div>

          {/* Phone Button */}
          <a
            href="tel:+2330000000000"
            className="bg-orange-500 text-white rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-orange-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10a6.979 6.979 0 012.793-5.207m0 0A6.979 6.979 0 0110 3m0 0h4m0 0a6.979 6.979 0 015.207 2.793m0 0A6.979 6.979 0 0121 10m0 4a6.979 6.979 0 01-2.793 5.207m0 0A6.979 6.979 0 0114 21m-4 0H6m0 0A6.979 6.979 0 01.793 17.207m0 0A6.979 6.979 0 013 14m0-4z"
              />
            </svg>
            <span>+233 000 000 0000</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
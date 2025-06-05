// src/components/layout/TopNav.jsx
import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const TopNav = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-20">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2 w-full max-w-xs">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search payments, merchants..."
            className="bg-transparent outline-none w-full text-sm text-gray-700 dark:text-gray-200"
          />
        </div>
        {/* Right Side: Notifications & User */}
        <div className="flex items-center gap-6">
          <button className="relative focus:outline-none">
            <FaBell className="text-xl text-gray-500 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">3</span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUserCircle className="text-2xl text-[#14B8A6]" />
            <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-200">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
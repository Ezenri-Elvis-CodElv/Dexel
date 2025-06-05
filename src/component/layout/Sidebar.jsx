// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaExchangeAlt, FaShieldAlt, FaStore, FaSyncAlt, FaChartBar } from 'react-icons/fa';

const navLinks = [
  {
    to: "/dashboard",
    label: "Overview",
    icon: <FaTachometerAlt className="mr-2" />,
  },
  {
    to: "/dashboard/payments",
    label: "Multi-Rail Payments",
    icon: <FaExchangeAlt className="mr-2" />,
  },
  {
    to: "/dashboard/fraud-prevention",
    label: "Fraud Prevention",
    icon: <FaShieldAlt className="mr-2" />,
  },
  {
    to: "/dashboard/retail-management",
    label: "Retail Management",
    icon: <FaStore className="mr-2" />,
  },
  {
    to: "/dashboard/reconciliation",
    label: "Reconciliation",
    icon: <FaSyncAlt className="mr-2" />,
  },
  {
    to: "/dashboard/reporting",
    label: "Reporting",
    icon: <FaChartBar className="mr-2" />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white dark:bg-gray-900 shadow-md h-screen flex flex-col">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
        <img src="/logo.gif" alt="Logo" className="w-10 h-10 rounded-lg" />
        <span className="text-xl font-bold text-[#0A4747]">Payment Dashboard</span>
      </div>
      <nav className="flex-1 mt-6 space-y-1 px-2">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition 
              ${
                location.pathname === link.to
                  ? "bg-[#14B8A6]/10 text-[#14B8A6] font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Gryndle. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
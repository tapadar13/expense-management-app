import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text font-bold text-xl font-bold text-xl">
              Expense Manager
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Dashboard
            </a>
            <a
              href="/reports"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              Reports
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

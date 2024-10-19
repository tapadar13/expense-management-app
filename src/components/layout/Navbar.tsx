import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">Expense Manager</span>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Menu, Bell, LogOut, User, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface Props {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: Props) {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="ml-4 lg:ml-0 text-xl font-semibold text-gray-900">
          Police Command Center
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="hidden md:block relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search tourists, incidents..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors duration-200">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              {user?.name}
            </span>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="py-1">
                <button
                  onClick={() => {
                    logout();
                    setShowUserMenu(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
import React, { useState } from 'react';
import { Menu, Bell, Globe, LogOut, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  onMenuClick: () => void;
}

export default function TouristHeader({ onMenuClick }: Props) {
  const { user, logout } = useAuth();
  const { currentLanguage, setLanguage, languages } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
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
          Welcome, Shivam
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors duration-200">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="flex items-center space-x-2 p-2 text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            <Globe className="w-5 h-5" />
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              {currentLanguage.nativeName}
            </span>
          </button>

          {showLanguageMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguageMenu(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                      lang.code === currentLanguage.code
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>{lang.nativeName}</span>
                      <span className="text-gray-400">{lang.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {user?.avatar ? (
              <img
                src="data:image/png;base64,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"
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              Shivam
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
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, User, Shield, Bell, FileText, MapPin, 
  Headphones, Calendar, X, Phone, Users, Map,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TouristSidebar({ open, onClose }: Props) {
  const { t } = useLanguage();

  const navigation = [
    { name: t('dashboard'), href: '/tourist', icon: Home },
    { name: t('profile'), href: '/tourist/profile', icon: User },
    { name: t('safety'), href: '/tourist/safety', icon: Shield },
    { name: t('alerts'), href: '/tourist/alerts', icon: Bell },
    { name: t('efir'), href: '/tourist/efir', icon: FileText },
    { name: t('places'), href: '/tourist/places', icon: MapPin },
    { name: t('services'), href: '/tourist/services', icon: Headphones },
    { name: t('tours'), href: '/tourist/tours', icon: Calendar },
    { name: 'Interactive Map', href: '/tourist/map', icon: Map },
    { name: 'Buddy System', href: '/tourist/buddy', icon: Users },
    { name: 'Community', href: '/tourist/community', icon: MessageSquare },
  ];

  const emergencyNumber = "100";

  return (
    <>
      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Tourist Safety</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
              onClick={() => onClose()}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Emergency Contact */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Phone className="w-5 h-5 text-red-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-red-800">Emergency</p>
                <p className="text-sm text-red-600">Dial {emergencyNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
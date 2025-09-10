import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, AlertTriangle, Bell, BarChart3, 
  Car, Shield, X, ShieldCheck
} from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ open, onClose }: Props) {
  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Tourists', href: '/admin/tourists', icon: Users },
    { name: 'Incidents', href: '/admin/incidents', icon: AlertTriangle },
    { name: 'Alerts', href: '/admin/alerts', icon: Bell },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Patrol Management', href: '/admin/patrol', icon: Car },
    { name: 'Women Safety', href: '/admin/women-safety', icon: Shield },
  ];

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
        fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
            <span className="text-lg font-semibold text-white">Admin Panel</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-gray-200"
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
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
              onClick={() => onClose()}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* System Status */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-200">System Online</p>
                <p className="text-xs text-gray-400">All services operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
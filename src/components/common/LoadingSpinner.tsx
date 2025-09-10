import React from 'react';
import { Shield } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Shield className="w-16 h-16 text-blue-600 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-gray-800">Smart Tourist Safety</h2>
        <p className="mt-2 text-gray-600">Loading your dashboard...</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}
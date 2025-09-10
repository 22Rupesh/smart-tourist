import React, { useState } from 'react';
import { Shield, Eye, EyeOff, AlertCircle, MapPin } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
    setIsLoading(false);
  };

  const demoAccounts = [
    { type: 'Tourist', email: 'tourist@demo.com', password: 'tourist123' },
    { type: 'Admin', email: 'admin@demo.com', password: 'admin123' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="relative">
              <Shield className="w-16 h-16 text-blue-600" />
              <MapPin className="w-6 h-6 text-emerald-600 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Smart Tourist Safety</h2>
          <p className="mt-2 text-sm text-gray-600">Your digital companion for safe travels</p>
        </div>

        {/* Demo Accounts */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Demo Accounts</h3>
          <div className="space-y-2">
            {demoAccounts.map((account) => (
              <div key={account.type} className="flex items-center justify-between text-xs">
                <span className="text-blue-700 font-medium">{account.type}:</span>
                <div className="text-blue-600">
                  <span className="mr-2">{account.email}</span>
                  <span>/ {account.password}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Protected by advanced security measures
          </p>
        </div>
      </div>
    </div>
  );
}
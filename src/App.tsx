import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import TouristDashboard from './components/tourist/TouristDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import LoadingSpinner from './components/common/LoadingSpinner';

function AppContent() {
  const { user, loading } = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialized(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || !isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route 
            path="/login" 
            element={user ? <Navigate to={user.role === 'admin' ? '/admin' : '/tourist'} /> : <LoginPage />} 
          />
          <Route 
            path="/tourist/*" 
            element={user?.role === 'tourist' ? <TouristDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/*" 
            element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={<Navigate to={user ? (user.role === 'admin' ? '/admin' : '/tourist') : '/login'} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
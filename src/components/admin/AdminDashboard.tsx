import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminHome from './pages/AdminHome';
import TouristsPage from './pages/TouristsPage';
import IncidentsPage from './pages/IncidentsPage';
import AlertsPage from './pages/AlertsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import PatrolPage from './pages/PatrolPage';
import WomenSafetyPage from './pages/WomenSafetyPage';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-20  justify-center items-center">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-auto bg-gray-50 p-4 lg:p-6">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/tourists" element={<TouristsPage />} />
            <Route path="/incidents" element={<IncidentsPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/patrol" element={<PatrolPage />} />
            <Route path="/women-safety" element={<WomenSafetyPage />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
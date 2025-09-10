import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TouristSidebar from './TouristSidebar';
import TouristHeader from './TouristHeader';
import DashboardHome from './pages/DashboardHome';
import ProfilePage from './pages/ProfilePage';
import SafetyPage from './pages/SafetyPage';
import AlertsPage from './pages/AlertsPage';
import EFIRPage from './pages/EFIRPage';
import PlacesPage from './pages/PlacesPage';
import ServicesPage from './pages/ServicesPage';
import ToursPage from './pages/ToursPage';
import MapPage from './pages/MapPage';
import BuddySystemPage from './pages/BuddySystemPage';
import CommunityPage from './pages/CommunityPage';

export default function TouristDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 ">
      <TouristSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-22  justify-center items-center">
        <TouristHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-auto bg-gray-50 p-4 lg:p-6">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/efir" element={<EFIRPage />} />
            <Route path="/places" element={<PlacesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/buddy" element={<BuddySystemPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="*" element={<Navigate to="/tourist" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
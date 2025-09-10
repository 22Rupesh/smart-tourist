import React, { useState } from 'react';
import { 
  Shield, Users, AlertTriangle, MapPin, 
  Clock, Phone, Eye, Bell, Heart,
  TrendingUp, Activity, CheckCircle
} from 'lucide-react';

export default function WomenSafetyPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');

  const womenTourists = [
    {
      id: 'WTD-2024-001',
      name: 'Sarah Johnson',
      age: 28,
      nationality: 'British',
      currentLocation: 'India Gate',
      safetyScore: 92,
      status: 'safe',
      lastCheckIn: '15 minutes ago',
      emergencyContacts: 2,
      travelGroup: 'Solo',
      riskFactors: ['Night travel', 'Solo traveler']
    },
    {
      id: 'WTD-2024-002',
      name: 'Emma Wilson',
      age: 24,
      nationality: 'American',
      currentLocation: 'Red Fort',
      safetyScore: 78,
      status: 'alert',
      lastCheckIn: '45 minutes ago',
      emergencyContacts: 3,
      travelGroup: 'With friends',
      riskFactors: ['High-risk area']
    },
    {
      id: 'WTD-2024-003',
      name: 'Priya Sharma',
      age: 32,
      nationality: 'Indian',
      currentLocation: 'Lotus Temple',
      safetyScore: 95,
      status: 'safe',
      lastCheckIn: '8 minutes ago',
      emergencyContacts: 4,
      travelGroup: 'Family',
      riskFactors: []
    },
    {
      id: 'WTD-2024-004',
      name: 'Lisa Chen',
      age: 26,
      nationality: 'Canadian',
      currentLocation: 'Chandni Chowk',
      safetyScore: 65,
      status: 'warning',
      lastCheckIn: '2 hours ago',
      emergencyContacts: 1,
      travelGroup: 'Solo',
      riskFactors: ['High-risk area', 'Solo traveler', 'Late check-in']
    }
  ];

  const safetyIncidents = [
    {
      id: 'WSI-2024-001',
      type: 'Harassment',
      reporter: 'Emma Wilson',
      location: 'Karol Bagh Market',
      time: '2 hours ago',
      status: 'investigating',
      priority: 'High',
      description: 'Verbal harassment by street vendor, immediate response dispatched'
    },
    {
      id: 'WSI-2024-002',
      type: 'Safety Concern',
      reporter: 'Anonymous',
      location: 'Paharganj Area',
      time: '4 hours ago',
      status: 'resolved',
      priority: 'Medium',
      description: 'Unsafe accommodation conditions reported, inspection completed'
    },
    {
      id: 'WSI-2024-003',
      type: 'Emergency Alert',
      reporter: 'Sarah Johnson',
      location: 'CP Metro Station',
      time: '6 hours ago',
      status: 'resolved',
      priority: 'High',
      description: 'Panic button activated, false alarm - tourist assistance provided'
    }
  ];

  const safetyZones = [
    { name: 'India Gate Complex', status: 'Safe', womenCount: 89, riskLevel: 'Low' },
    { name: 'Lotus Temple Area', status: 'Safe', womenCount: 67, riskLevel: 'Low' },
    { name: 'Red Fort Area', status: 'Moderate', womenCount: 45, riskLevel: 'Medium' },
    { name: 'Chandni Chowk', status: 'High Alert', womenCount: 34, riskLevel: 'High' },
    { name: 'Karol Bagh Market', status: 'High Alert', womenCount: 23, riskLevel: 'High' }
  ];

  const specialPatrols = [
    {
      id: 'WSP-001',
      name: 'Women Safety Patrol Alpha',
      officers: ['Inspector Sunita Devi', 'Constable Priya Singh'],
      currentArea: 'Central Delhi Tourist Circuit',
      status: 'active',
      lastUpdate: '5 minutes ago',
      incidentsHandled: 3
    },
    {
      id: 'WSP-002',
      name: 'Women Safety Patrol Beta',
      officers: ['Inspector Kavita Sharma', 'Constable Meera Gupta'],
      currentArea: 'Old Delhi Markets',
      status: 'responding',
      lastUpdate: '12 minutes ago',
      incidentsHandled: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'bg-green-100 text-green-800';
      case 'alert':
        return 'bg-yellow-100 text-yellow-800';
      case 'warning':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSafetyScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-pink-100 rounded-full">
              <Shield className="w-8 h-8 text-pink-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Women's Safety Dashboard</h1>
              <p className="text-gray-600 mt-1">Dedicated monitoring and protection for women tourists</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200">
              <Bell className="w-4 h-4" />
              <span>Emergency Alert</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-pink-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Women Tourists</p>
              <p className="text-2xl font-semibold text-gray-900">347</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Safe Status</p>
              <p className="text-2xl font-semibold text-gray-900">312</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Safety Score</p>
              <p className="text-2xl font-semibold text-gray-900">87.5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Women Tourists Monitoring */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Women Tourists Monitoring</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {womenTourists.map((tourist) => (
              <div key={tourist.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{tourist.name}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tourist.status)}`}>
                          {tourist.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm text-gray-600">
                        <div>
                          <p className="mb-1"><strong>Age:</strong> {tourist.age} • {tourist.nationality}</p>
                          <p className="mb-1 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {tourist.currentLocation}
                          </p>
                          <p className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            Last check-in: {tourist.lastCheckIn}
                          </p>
                        </div>
                        <div>
                          <p className="mb-1"><strong>Travel Group:</strong> {tourist.travelGroup}</p>
                          <p className="mb-1"><strong>Emergency Contacts:</strong> {tourist.emergencyContacts}</p>
                          <div className={`text-lg font-bold ${getSafetyScoreColor(tourist.safetyScore)}`}>
                            Safety Score: {tourist.safetyScore}
                          </div>
                        </div>
                      </div>
                      
                      {tourist.riskFactors.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700 mb-1">Risk Factors:</p>
                          <div className="flex flex-wrap gap-1">
                            {tourist.riskFactors.map((factor, index) => (
                              <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-md">
                                {factor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors duration-200">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-pink-600 hover:text-pink-800 hover:bg-pink-50 rounded-lg transition-colors duration-200">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Zones */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Safety Zones</h3>
          </div>
          <div className="p-6 space-y-4">
            {safetyZones.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{zone.name}</h4>
                  <p className="text-sm text-gray-600">{zone.womenCount} women tourists</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(zone.riskLevel)}`}>
                    {zone.riskLevel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Incidents & Special Patrols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Safety Incidents */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Safety Incidents</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {safetyIncidents.map((incident) => (
              <div key={incident.id} className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{incident.type}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    incident.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    incident.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {incident.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{incident.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Reporter: {incident.reporter}</span>
                  <span>{incident.time}</span>
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{incident.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Women Safety Patrols */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Women Safety Patrols</h3>
          </div>
          <div className="p-6 space-y-4">
            {specialPatrols.map((patrol) => (
              <div key={patrol.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{patrol.name}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    patrol.status === 'active' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {patrol.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Officers:</strong> {patrol.officers.join(', ')}</p>
                  <p><strong>Current Area:</strong> {patrol.currentArea}</p>
                  <p><strong>Incidents Handled:</strong> {patrol.incidentsHandled}</p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Updated {patrol.lastUpdate}
                  </p>
                </div>
                
                <div className="flex space-x-2 mt-3">
                  <button className="px-3 py-1 text-xs bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-200">
                    Track
                  </button>
                  <button className="px-3 py-1 text-xs border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors duration-200">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
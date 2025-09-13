import React, { useState } from 'react';
import { 
  Search, Filter, Eye, MapPin, Phone, 
  Shield, Clock, AlertTriangle, CheckCircle,
  User, Calendar, Download
} from 'lucide-react';

export default function TouristsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tourists = [
    {
      id: 'TID-2024-001',
      name: 'Shivam',
      email: 'shivam@email.com',
      phone: '+91-9876543210',
      nationality: 'Indian',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      currentLocation: 'India Gate',
      safetyScore: 85,
      status: 'active',
      checkInTime: '2 hours ago',
      itinerary: ['India Gate', 'Red Fort', 'Qutub Minar'],
      emergencyContacts: 2,
      riskLevel: 'low',
      kycStatus: 'verified'
    },
    {
      id: 'TID-2024-002',
      name: 'John Davis',
      email: 'john.davis@email.com',
      phone: '+1-555-0123',
      nationality: 'American',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      currentLocation: 'Red Fort',
      safetyScore: 72,
      status: 'alert',
      checkInTime: '30 minutes ago',
      itinerary: ['Red Fort', 'Jama Masjid', 'Chandni Chowk'],
      emergencyContacts: 1,
      riskLevel: 'medium',
      kycStatus: 'verified'
    },
    {
      id: 'TID-2024-003',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+44-7123-456789',
      nationality: 'British',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      currentLocation: 'Lotus Temple',
      safetyScore: 91,
      status: 'safe',
      checkInTime: '45 minutes ago',
      itinerary: ['Lotus Temple', 'Humayun\'s Tomb'],
      emergencyContacts: 3,
      riskLevel: 'low',
      kycStatus: 'verified'
    },
    {
      id: 'TID-2024-004',
      name: 'Rahul Patel',
      email: 'rahul.patel@email.com',
      phone: '+91-9123456789',
      nationality: 'Indian',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      currentLocation: 'Chandni Chowk',
      safetyScore: 58,
      status: 'warning',
      checkInTime: '15 minutes ago',
      itinerary: ['Chandni Chowk', 'Karol Bagh'],
      emergencyContacts: 1,
      riskLevel: 'high',
      kycStatus: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800';
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

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-green-600';
      case 'medium':
        return 'text-yellow-600';
      case 'high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getSafetyScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredTourists = tourists.filter(tourist => {
    const matchesSearch = searchQuery === '' || 
      tourist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tourist.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tourist.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    return matchesSearch && tourist.status === selectedFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tourist Management</h1>
            <p className="text-gray-600 mt-1">Monitor and manage all registered tourists</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex space-x-2">
            {[
              { id: 'all', label: 'All Status' },
              { id: 'active', label: 'Active' },
              { id: 'safe', label: 'Safe' },
              { id: 'alert', label: 'Alert' },
              { id: 'warning', label: 'Warning' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Tourists</p>
              <p className="text-2xl font-semibold text-gray-900">1,247</p>
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
              <p className="text-2xl font-semibold text-gray-900">1,156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Alerts Active</p>
              <p className="text-2xl font-semibold text-gray-900">68</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Risk</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tourists Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Tourist Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tourist
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Safety Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTourists.map((tourist) => (
                <tr key={tourist.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={tourist.avatar}
                        alt={tourist.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{tourist.name}</div>
                        <div className="text-sm text-gray-500">{tourist.id}</div>
                        <div className="text-xs text-gray-400">{tourist.nationality}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{tourist.email}</div>
                    <div className="text-sm text-gray-500">{tourist.phone}</div>
                    <div className="text-xs text-gray-400">
                      {tourist.emergencyContacts} emergency contacts
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                      {tourist.currentLocation}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      Last check-in: {tourist.checkInTime}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-lg font-bold ${getSafetyScoreColor(tourist.safetyScore)}`}>
                      {tourist.safetyScore}
                    </div>
                    <div className="w-12 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className={`h-2 rounded-full ${
                          tourist.safetyScore >= 80 ? 'bg-green-600' : 
                          tourist.safetyScore >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{ width: `${tourist.safetyScore}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(tourist.status)}`}>
                      {tourist.status}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      KYC: {tourist.kycStatus}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${getRiskColor(tourist.riskLevel)}`}>
                      {tourist.riskLevel.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-800">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-orange-600 hover:text-orange-800">
                        <MapPin className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredTourists.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tourists found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
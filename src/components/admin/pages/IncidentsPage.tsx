import React, { useState } from 'react';
import { 
  AlertTriangle, Eye, MessageSquare, Clock, 
  MapPin, User, Filter, Search, Download,
  CheckCircle, XCircle, RefreshCw
} from 'lucide-react';

export default function IncidentsPage() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const incidents = [
    {
      id: 'INC-2024-001',
      title: 'Lost Wallet at Metro Station',
      type: 'Lost Property',
      reporter: {
        name: 'Sarah Johnson',
        id: 'TID-2024-001',
        phone: '+44-7123-456789'
      },
      location: 'Rajiv Chowk Metro Station',
      time: '2024-01-15 14:30',
      status: 'investigating',
      priority: 'Medium',
      assignedOfficer: 'Inspector Sharma',
      description: 'Tourist reported losing a black leather wallet containing cards and cash while boarding metro.',
      evidence: ['wallet_photo.jpg', 'metro_ticket.jpg'],
      updates: 3
    },
    {
      id: 'INC-2024-002',
      title: 'Harassment by Street Vendor',
      type: 'Harassment',
      reporter: {
        name: 'John Davis',
        id: 'TID-2024-002',
        phone: '+1-555-0123'
      },
      location: 'Chandni Chowk Market',
      time: '2024-01-15 16:45',
      status: 'resolved',
      priority: 'High',
      assignedOfficer: 'Inspector Kumar',
      description: 'Tourist reported aggressive behavior and overcharging by a street vendor.',
      evidence: ['vendor_photo.jpg', 'receipt.jpg'],
      updates: 5
    },
    {
      id: 'INC-2024-003',
      title: 'Medical Emergency - Food Poisoning',
      type: 'Medical Emergency',
      reporter: {
        name: 'Emma Wilson',
        id: 'TID-2024-003',
        phone: '+44-7987-654321'
      },
      location: 'Red Fort Area',
      time: '2024-01-15 18:20',
      status: 'resolved',
      priority: 'High',
      assignedOfficer: 'Inspector Singh',
      description: 'Tourist fell ill after eating from a local food stall. Ambulance called.',
      evidence: ['medical_report.pdf'],
      updates: 7
    },
    {
      id: 'INC-2024-004',
      title: 'Theft of Camera Equipment',
      type: 'Theft',
      reporter: {
        name: 'Shivam',
        id: 'TID-2024-004',
        phone: '+91-9876543210'
      },
      location: 'India Gate',
      time: '2024-01-15 20:15',
      status: 'open',
      priority: 'High',
      assignedOfficer: 'Inspector Patel',
      description: 'Professional camera stolen while tourist was taking photos near India Gate.',
      evidence: ['camera_photo.jpg', 'witness_statement.pdf'],
      updates: 2
    },
    {
      id: 'INC-2024-005',
      title: 'Road Accident - Minor Injury',
      type: 'Road Accident',
      reporter: {
        name: 'Rahul Patel',
        id: 'TID-2024-005',
        phone: '+91-9123456789'
      },
      location: 'CP Outer Circle',
      time: '2024-01-15 21:00',
      status: 'investigating',
      priority: 'Medium',
      assignedOfficer: 'Inspector Gupta',
      description: 'Tourist injured in minor traffic accident while crossing road.',
      evidence: ['accident_scene.jpg', 'medical_certificate.pdf'],
      updates: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'investigating':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'closed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 bg-red-50';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'Low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return CheckCircle;
      case 'investigating':
        return RefreshCw;
      case 'closed':
        return XCircle;
      default:
        return AlertTriangle;
    }
  };

  const filteredIncidents = incidents.filter(incident => {
    const matchesSearch = searchQuery === '' || 
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.reporter.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedStatus === 'all') return matchesSearch;
    return matchesSearch && incident.status === selectedStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Incident Management</h1>
            <p className="text-gray-600 mt-1">Track and manage all tourist incidents and e-FIRs</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search incidents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex space-x-2">
            {[
              { id: 'all', label: 'All Status' },
              { id: 'open', label: 'Open' },
              { id: 'investigating', label: 'Investigating' },
              { id: 'resolved', label: 'Resolved' },
              { id: 'closed', label: 'Closed' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedStatus(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedStatus === filter.id
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

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Open Incidents</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <RefreshCw className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Under Investigation</p>
              <p className="text-2xl font-semibold text-gray-900">15</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Resolved Today</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-semibold text-gray-900">4.2m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Incidents List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Incident Reports</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredIncidents.map((incident) => {
            const StatusIcon = getStatusIcon(incident.status);
            return (
              <div key={incident.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-lg ${getStatusColor(incident.status).split(' ')[0]} ${getStatusColor(incident.status).split(' ')[1]}`}>
                        <StatusIcon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-lg font-semibold text-gray-900">{incident.title}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(incident.status)}`}>
                            {incident.status}
                          </span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(incident.priority)}`}>
                            {incident.priority}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>ID:</strong> {incident.id}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Type:</strong> {incident.type}
                          </p>
                          <p className="text-sm text-gray-600 mb-1 flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {incident.reporter.name} ({incident.reporter.id})
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {incident.location}
                          </p>
                          <p className="text-sm text-gray-600 mb-1 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {incident.time}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Officer:</strong> {incident.assignedOfficer}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-3">{incident.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{incident.evidence.length} evidence files</span>
                          <span>{incident.updates} updates</span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors duration-200">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Update Status
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filteredIncidents.length === 0 && (
        <div className="text-center py-12">
          <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No incidents found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
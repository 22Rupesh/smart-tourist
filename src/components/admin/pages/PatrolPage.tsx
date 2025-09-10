import React, { useState } from 'react';
import { 
  Car, MapPin, Clock, Users, Route, 
  Shield, AlertTriangle, CheckCircle, Play,
  Pause, RefreshCw, Calendar
} from 'lucide-react';

export default function PatrolPage() {
  const [selectedShift, setSelectedShift] = useState('current');

  const patrolUnits = [
    {
      id: 'PATROL-001',
      callSign: 'Alpha-1',
      officers: ['Inspector Sharma', 'Constable Kumar'],
      currentLocation: 'India Gate Circle',
      status: 'active',
      route: 'Central Delhi Route A',
      lastUpdate: '2 minutes ago',
      incidentsToday: 3,
      coverage: 85
    },
    {
      id: 'PATROL-002',
      callSign: 'Bravo-2',
      officers: ['Inspector Singh', 'Constable Patel'],
      currentLocation: 'Red Fort Parking',
      status: 'responding',
      route: 'Old Delhi Route B',
      lastUpdate: '5 minutes ago',
      incidentsToday: 1,
      coverage: 92
    },
    {
      id: 'PATROL-003',
      callSign: 'Charlie-3',
      officers: ['Inspector Gupta', 'Constable Yadav'],
      currentLocation: 'Lotus Temple',
      status: 'break',
      route: 'South Delhi Route C',
      lastUpdate: '15 minutes ago',
      incidentsToday: 2,
      coverage: 78
    },
    {
      id: 'PATROL-004',
      callSign: 'Delta-4',
      officers: ['Inspector Verma', 'Constable Joshi'],
      currentLocation: 'Qutub Minar',
      status: 'active',
      route: 'South Delhi Route D',
      lastUpdate: '1 minute ago',
      incidentsToday: 0,
      coverage: 88
    }
  ];

  const recommendedRoutes = [
    {
      id: 'REC-001',
      name: 'High-Risk Area Patrol',
      priority: 'High',
      areas: ['Karol Bagh Market', 'Paharganj', 'Old Delhi Station'],
      estimatedTime: '45 minutes',
      riskScore: 85,
      lastPatrolled: '3 hours ago',
      reason: 'Multiple incident reports in the last 24 hours'
    },
    {
      id: 'REC-002',
      name: 'Tourist Hotspot Coverage',
      priority: 'Medium',
      areas: ['India Gate', 'Red Fort', 'Chandni Chowk'],
      estimatedTime: '60 minutes',
      riskScore: 65,
      lastPatrolled: '1 hour ago',
      reason: 'High tourist density detected'
    },
    {
      id: 'REC-003',
      name: 'Evening Safety Round',
      priority: 'Medium',
      areas: ['CP Outer Circle', 'Khan Market', 'Lodhi Gardens'],
      estimatedTime: '40 minutes',
      riskScore: 55,
      lastPatrolled: '2 hours ago',
      reason: 'Scheduled evening patrol for tourist areas'
    }
  ];

  const shiftSchedule = [
    {
      shift: 'Morning (6 AM - 2 PM)',
      units: 6,
      coverage: '95%',
      incidents: 8,
      status: 'completed'
    },
    {
      shift: 'Afternoon (2 PM - 10 PM)',
      units: 8,
      coverage: '88%',
      incidents: 12,
      status: 'active'
    },
    {
      shift: 'Night (10 PM - 6 AM)',
      units: 4,
      coverage: '92%',
      incidents: 3,
      status: 'scheduled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'responding':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'break':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'offline':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return CheckCircle;
      case 'responding':
        return AlertTriangle;
      case 'break':
        return Pause;
      default:
        return RefreshCw;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Patrol Management</h1>
            <p className="text-gray-600 mt-1">Monitor and coordinate police patrol units</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="current">Current Shift</option>
              <option value="next">Next Shift</option>
              <option value="all">All Shifts</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Patrol Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Car className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Units</p>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Area Coverage</p>
              <p className="text-2xl font-semibold text-gray-900">88%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Incidents Today</p>
              <p className="text-2xl font-semibold text-gray-900">23</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-semibold text-gray-900">4.2m</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Patrol Units */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Active Patrol Units</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {patrolUnits.map((unit) => {
              const StatusIcon = getStatusIcon(unit.status);
              return (
                <div key={unit.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg border ${getStatusColor(unit.status)}`}>
                        <StatusIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{unit.callSign}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(unit.status)}`}>
                            {unit.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm text-gray-600">
                          <div>
                            <p className="flex items-center mb-1">
                              <Users className="w-4 h-4 mr-2" />
                              {unit.officers.join(', ')}
                            </p>
                            <p className="flex items-center mb-1">
                              <MapPin className="w-4 h-4 mr-2" />
                              {unit.currentLocation}
                            </p>
                          </div>
                          <div>
                            <p className="flex items-center mb-1">
                              <Route className="w-4 h-4 mr-2" />
                              {unit.route}
                            </p>
                            <p className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              Updated {unit.lastUpdate}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-600">
                              <strong>Incidents:</strong> {unit.incidentsToday}
                            </span>
                            <span className="text-gray-600">
                              <strong>Coverage:</strong> {unit.coverage}%
                            </span>
                          </div>
                          
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                              Track
                            </button>
                            <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                              Contact
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

        {/* Recommended Routes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recommended Patrols</h3>
          </div>
          <div className="p-6 space-y-4">
            {recommendedRoutes.map((route) => (
              <div key={route.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{route.name}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(route.priority)}`}>
                    {route.priority}
                  </span>
                </div>
                
                <div className="space-y-2 mb-3 text-sm text-gray-600">
                  <p><strong>Areas:</strong> {route.areas.join(', ')}</p>
                  <p><strong>Duration:</strong> {route.estimatedTime}</p>
                  <p><strong>Last Patrol:</strong> {route.lastPatrolled}</p>
                </div>
                
                <p className="text-xs text-gray-500 mb-3">{route.reason}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">Risk Score:</span>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      route.riskScore >= 80 ? 'bg-red-100 text-red-800' :
                      route.riskScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {route.riskScore}
                    </div>
                  </div>
                  <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shift Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Shift Schedule</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shiftSchedule.map((shift, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{shift.shift}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    shift.status === 'active' ? 'bg-green-100 text-green-800' :
                    shift.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {shift.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Units:</span>
                    <span className="font-medium">{shift.units}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coverage:</span>
                    <span className="font-medium">{shift.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Incidents:</span>
                    <span className="font-medium">{shift.incidents}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
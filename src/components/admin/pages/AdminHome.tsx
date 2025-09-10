import React from 'react';
import { 
  Users, AlertTriangle, CheckCircle, Clock, 
  TrendingUp, MapPin, Shield, Activity
} from 'lucide-react';

export default function AdminHome() {
  const stats = [
    {
      name: 'Active Tourists',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Open Incidents',
      value: '23',
      change: '-8%',
      changeType: 'decrease',
      icon: AlertTriangle,
      color: 'bg-red-500'
    },
    {
      name: 'Resolved Today',
      value: '45',
      change: '+23%',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      name: 'Avg Response Time',
      value: '3.2 min',
      change: '-15%',
      changeType: 'decrease',
      icon: Clock,
      color: 'bg-yellow-500'
    }
  ];

  const recentIncidents = [
    {
      id: 'INC-2024-001',
      type: 'Lost Property',
      tourist: 'Sarah Johnson',
      location: 'India Gate',
      time: '15 minutes ago',
      status: 'Active',
      priority: 'Medium'
    },
    {
      id: 'INC-2024-002',
      type: 'Harassment',
      tourist: 'Raj Patel',
      location: 'Chandni Chowk',
      time: '32 minutes ago',
      status: 'Investigating',
      priority: 'High'
    },
    {
      id: 'INC-2024-003',
      type: 'Medical Emergency',
      tourist: 'Emma Wilson',
      location: 'Red Fort',
      time: '1 hour ago',
      status: 'Resolved',
      priority: 'High'
    }
  ];

  const activeAlerts = [
    {
      type: 'emergency',
      message: 'High crowd density at India Gate - Deploy additional patrol',
      location: 'India Gate Area',
      time: '5 minutes ago'
    },
    {
      type: 'security',
      message: 'Suspicious activity reported near Red Fort entrance',
      location: 'Red Fort',
      time: '12 minutes ago'
    },
    {
      type: 'weather',
      message: 'Heavy rain warning - Tourist safety advisory issued',
      location: 'All Areas',
      time: '25 minutes ago'
    }
  ];

  const touristLocations = [
    { area: 'India Gate', count: 324, status: 'Normal' },
    { area: 'Red Fort', count: 198, status: 'Crowded' },
    { area: 'Qutub Minar', count: 156, status: 'Normal' },
    { area: 'Lotus Temple', count: 89, status: 'Low' },
    { area: 'Chandni Chowk', count: 267, status: 'High Risk' }
  ];

  const communityStats = [
    { label: 'Community Posts Today', value: 89, trend: '+12%' },
    { label: 'Active Buddy Connections', value: 234, trend: '+8%' },
    { label: 'Safety Alerts Shared', value: 45, trend: '+15%' },
    { label: 'Group Expenses Tracked', value: '₹1.2L', trend: '+22%' }
  ];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-yellow-100 text-yellow-800';
      case 'Investigating':
        return 'bg-blue-100 text-blue-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getAreaStatusColor = (status: string) => {
    switch (status) {
      case 'High Risk':
        return 'bg-red-100 text-red-800';
      case 'Crowded':
        return 'bg-yellow-100 text-yellow-800';
      case 'Normal':
        return 'bg-green-100 text-green-800';
      case 'Low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className={`ml-2 text-sm font-medium ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Incidents */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Incidents</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{incident.id}</h4>
                      <p className="text-sm text-gray-600">{incident.type} - {incident.tourist}</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="mr-3">{incident.location}</span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{incident.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                    <span className={`text-xs font-medium ${getPriorityColor(incident.priority)}`}>
                      {incident.priority} Priority
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Active Alerts</h3>
          </div>
          <div className="p-6 space-y-4">
            {activeAlerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'emergency' ? 'bg-red-50 border-red-400' :
                alert.type === 'security' ? 'bg-yellow-50 border-yellow-400' :
                'bg-blue-50 border-blue-400'
              }`}>
                <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                <div className="flex items-center mt-2 text-xs text-gray-600">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="mr-3">{alert.location}</span>
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tourist Locations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Tourist Distribution</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {touristLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{location.area}</p>
                      <p className="text-xs text-gray-600">{location.count} tourists</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getAreaStatusColor(location.status)}`}>
                    {location.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Engagement */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Community Engagement</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {communityStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{stat.label}</p>
                    <p className="text-xs text-gray-600">Today's activity</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* System Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">System Performance</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Response Time</span>
                  <span className="text-sm text-gray-600">3.2 min avg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Resolution Rate</span>
                  <span className="text-sm text-gray-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">System Uptime</span>
                  <span className="text-sm text-gray-600">99.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
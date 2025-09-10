import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, Users, MapPin, 
  Calendar, Clock, AlertTriangle, Shield,
  Activity, Target, Zap, Download
} from 'lucide-react';

export default function AnalyticsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  const stats = [
    {
      name: 'Total Tourists',
      value: '2,847',
      change: '+15.2%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Incidents Resolved',
      value: '146',
      change: '+8.7%',
      changeType: 'increase',
      icon: Shield,
      color: 'bg-green-500'
    },
    {
      name: 'Response Time',
      value: '3.2min',
      change: '-12.3%',
      changeType: 'decrease',
      icon: Clock,
      color: 'bg-orange-500'
    },
    {
      name: 'Safety Score',
      value: '87.4',
      change: '+2.1%',
      changeType: 'increase',
      icon: Activity,
      color: 'bg-purple-500'
    }
  ];

  const popularLocations = [
    { name: 'India Gate', visitors: 1284, safetyScore: 92, incidents: 3 },
    { name: 'Red Fort', visitors: 956, safetyScore: 88, incidents: 7 },
    { name: 'Qutub Minar', visitors: 743, safetyScore: 94, incidents: 2 },
    { name: 'Lotus Temple', visitors: 621, safetyScore: 96, incidents: 1 },
    { name: 'Chandni Chowk', visitors: 589, safetyScore: 75, incidents: 12 },
    { name: 'Humayun\'s Tomb', visitors: 478, safetyScore: 91, incidents: 2 }
  ];

  const incidentTypes = [
    { type: 'Lost Property', count: 45, percentage: 31, trend: '+5%' },
    { type: 'Harassment', count: 28, percentage: 19, trend: '-12%' },
    { type: 'Theft', count: 24, percentage: 16, trend: '+8%' },
    { type: 'Medical Emergency', count: 21, percentage: 14, trend: '-3%' },
    { type: 'Road Accident', count: 18, percentage: 12, trend: '+15%' },
    { type: 'Other', count: 12, percentage: 8, trend: '-7%' }
  ];

  const timelyResponses = [
    { time: '< 2 min', count: 87, percentage: 45 },
    { time: '2-5 min', count: 76, percentage: 39 },
    { time: '5-10 min', count: 23, percentage: 12 },
    { time: '> 10 min', count: 8, percentage: 4 }
  ];

  const riskAreas = [
    { area: 'Karol Bagh Market', riskLevel: 'High', incidents: 18, lastIncident: '2 hours ago' },
    { area: 'Paharganj Area', riskLevel: 'High', incidents: 15, lastIncident: '4 hours ago' },
    { area: 'Old Delhi Station', riskLevel: 'Medium', incidents: 12, lastIncident: '1 day ago' },
    { area: 'Chandni Chowk East', riskLevel: 'Medium', incidents: 8, lastIncident: '6 hours ago' }
  ];

  const getSafetyColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getRiskColor = (level: string) => {
    switch (level) {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Locations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Popular Tourist Locations</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {popularLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.visitors} visitors • {location.incidents} incidents</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-full text-sm font-medium ${getSafetyColor(location.safetyScore)}`}>
                      {location.safetyScore}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident Types */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Incident Categories</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {incidentTypes.map((incident, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span className="font-medium text-gray-900">{incident.type}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{incident.count}</div>
                      <div className="text-xs text-gray-500">{incident.percentage}%</div>
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded ${
                      incident.trend.startsWith('+') ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                    }`}>
                      {incident.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response Time Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Response Time Distribution</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {timelyResponses.map((response, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="font-medium text-gray-900">{response.time}</span>
                  </div>
                  <div className="flex items-center space-x-4 flex-1 ml-6">
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${response.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right min-w-0">
                      <div className="text-sm font-bold text-gray-900">{response.count}</div>
                      <div className="text-xs text-gray-500">{response.percentage}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Areas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">High-Risk Areas</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {riskAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`w-5 h-5 ${
                      area.riskLevel === 'High' ? 'text-red-500' : 'text-yellow-500'
                    }`} />
                    <div>
                      <h4 className="font-medium text-gray-900">{area.area}</h4>
                      <p className="text-sm text-gray-600">{area.incidents} incidents • {area.lastIncident}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getRiskColor(area.riskLevel)}`}>
                    {area.riskLevel} Risk
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Performance Highlights</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• Response time improved by 12.3% this week</li>
                  <li>• 87% of incidents resolved within 24 hours</li>
                  <li>• Tourist satisfaction rating: 4.6/5</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Areas for Improvement</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• Increase patrol frequency in Karol Bagh area</li>
                  <li>• Deploy additional units during peak hours</li>
                  <li>• Enhance safety measures at transport hubs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
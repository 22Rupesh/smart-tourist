import React, { useState } from 'react';
import { 
  Shield, MapPin, AlertTriangle, CheckCircle, Clock, 
  TrendingUp, Activity, Zap, Bell, Eye
} from 'lucide-react';

export default function SafetyPage() {
  const [trackingEnabled, setTrackingEnabled] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  const safetyScore = 85;
  const riskLevel = 'Low';
  const currentZone = 'Central Delhi - Tourist Zone A';

  const safetyMetrics = [
    { label: 'Location Safety', value: 90, color: 'bg-green-500' },
    { label: 'Time of Day', value: 75, color: 'bg-yellow-500' },
    { label: 'Crowd Density', value: 88, color: 'bg-green-500' },
    { label: 'Weather Risk', value: 95, color: 'bg-green-500' }
  ];

  const riskZones = [
    { name: 'Old Delhi Station Area', level: 'High', distance: '12.3 km', reason: 'High crime rate reported' },
    { name: 'Paharganj Market', level: 'Medium', distance: '8.1 km', reason: 'Crowded area, pickpocketing risk' },
    { name: 'Karol Bagh East', level: 'Medium', distance: '15.7 km', reason: 'Traffic accidents common' }
  ];

  const safetyTips = [
    'Keep emergency contacts easily accessible',
    'Share your location with trusted contacts',
    'Avoid displaying expensive items in public',
    'Stay in well-lit areas after dark',
    'Keep copies of important documents'
  ];

  const recentAlerts = [
    { time: '2 hours ago', type: 'info', message: 'Entered high-security zone - India Gate area' },
    { time: '4 hours ago', type: 'warning', message: 'Traffic congestion alert for planned route' },
    { time: '1 day ago', type: 'success', message: 'Safe check-in completed at Red Fort' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Safety Score Overview */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Safety Dashboard</h1>
            <p className="mt-2 text-emerald-100">Real-time safety monitoring and alerts</p>
          </div>
          <div className="text-right">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold">{safetyScore}</div>
              <div className="text-emerald-100">Safety Score</div>
              <div className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                riskLevel === 'Low' ? 'bg-green-500' : riskLevel === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                {riskLevel} Risk
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Safety Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Safety Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-full">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-green-800">Safe Zone</p>
                  <p className="text-sm text-green-600">{currentZone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-blue-800">Last Check-in</p>
                  <p className="text-sm text-blue-600">15 minutes ago</p>
                </div>
              </div>
            </div>

            {/* Safety Metrics */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Safety Factors</h4>
              {safetyMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className="text-sm text-gray-600">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${metric.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Zones */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Risk Zones</h3>
            <div className="space-y-4">
              {riskZones.map((zone, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      zone.level === 'High' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      <AlertTriangle className={`w-5 h-5 ${
                        zone.level === 'High' ? 'text-red-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{zone.name}</p>
                      <p className="text-sm text-gray-600">{zone.reason}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      zone.level === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {zone.level} Risk
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{zone.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Real-time Location Tracking</p>
                    <p className="text-sm text-gray-600">Share your location with emergency contacts</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={trackingEnabled}
                    onChange={(e) => setTrackingEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Safety Alerts</p>
                    <p className="text-sm text-gray-600">Receive notifications about safety risks</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={alertsEnabled}
                    onChange={(e) => setAlertsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Safety Trend</span>
                </div>
                <span className="text-sm font-bold text-green-600">+12%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Check-ins Today</span>
                </div>
                <span className="text-sm font-bold text-blue-600">15</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">Alerts Received</span>
                </div>
                <span className="text-sm font-bold text-yellow-600">3</span>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Tips</h3>
            <div className="space-y-3">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  alert.type === 'success' ? 'bg-green-50 border-green-400' :
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                  'bg-blue-50 border-blue-400'
                }`}>
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
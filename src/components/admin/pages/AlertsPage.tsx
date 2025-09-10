import React, { useState } from 'react';
import { 
  Bell, Send, MapPin, Clock, AlertTriangle, 
  Users, Filter, Megaphone, Plus, Eye
} from 'lucide-react';

export default function AlertsPage() {
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [selectedZone, setSelectedZone] = useState('all');

  const alerts = [
    {
      id: 'ALT-2024-001',
      type: 'emergency',
      title: 'High Crowd Density Alert',
      message: 'Unusually high tourist concentration detected at India Gate. Deploy additional patrol units.',
      zone: 'Central Delhi',
      targetArea: 'India Gate Complex',
      sentBy: 'System AI',
      time: '5 minutes ago',
      recipients: 324,
      status: 'active'
    },
    {
      id: 'ALT-2024-002',
      type: 'security',
      title: 'Suspicious Activity Report',
      message: 'Multiple reports of suspicious individuals near Red Fort entrance. Investigate immediately.',
      zone: 'Old Delhi',
      targetArea: 'Red Fort Area',
      sentBy: 'Inspector Kumar',
      time: '12 minutes ago',
      recipients: 89,
      status: 'investigating'
    },
    {
      id: 'ALT-2024-003',
      type: 'weather',
      title: 'Heavy Rain Warning',
      message: 'Heavy rainfall expected in next 2 hours. Tourist safety advisory issued for outdoor attractions.',
      zone: 'All Areas',
      targetArea: 'Delhi NCR',
      sentBy: 'Weather System',
      time: '25 minutes ago',
      recipients: 1247,
      status: 'active'
    },
    {
      id: 'ALT-2024-004',
      type: 'traffic',
      title: 'Road Closure Notice',
      message: 'CP Outer Circle closed due to VIP movement. Alternate routes suggested to tourists.',
      zone: 'Central Delhi',
      targetArea: 'Connaught Place',
      sentBy: 'Traffic Control',
      time: '45 minutes ago',
      recipients: 156,
      status: 'resolved'
    },
    {
      id: 'ALT-2024-005',
      type: 'medical',
      title: 'Medical Emergency Response',
      message: 'Medical emergency at Lotus Temple. Ambulance dispatched, area cordoned.',
      zone: 'South Delhi',
      targetArea: 'Lotus Temple',
      sentBy: 'Emergency Services',
      time: '1 hour ago',
      recipients: 45,
      status: 'resolved'
    }
  ];

  const zones = [
    { id: 'all', name: 'All Zones', count: 1247 },
    { id: 'central', name: 'Central Delhi', count: 456 },
    { id: 'old-delhi', name: 'Old Delhi', count: 234 },
    { id: 'south-delhi', name: 'South Delhi', count: 198 },
    { id: 'north-delhi', name: 'North Delhi', count: 167 },
    { id: 'east-delhi', name: 'East Delhi', count: 134 },
    { id: 'west-delhi', name: 'West Delhi', count: 98 }
  ];

  const getAlertTypeColor = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'security':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'weather':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'traffic':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'medical':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'investigating':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const BroadcastModal = () => {
    const [alertType, setAlertType] = useState('emergency');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [targetZone, setTargetZone] = useState('all');

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Broadcast Emergency Alert</h3>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alert Type</label>
                <select 
                  value={alertType}
                  onChange={(e) => setAlertType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="emergency">Emergency</option>
                  <option value="security">Security</option>
                  <option value="weather">Weather</option>
                  <option value="traffic">Traffic</option>
                  <option value="medical">Medical</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Zone</label>
                <select 
                  value={targetZone}
                  onChange={(e) => setTargetZone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {zones.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} ({zone.count} tourists)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alert Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Brief alert title"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alert Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detailed alert message for tourists..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Warning</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    This alert will be sent immediately to all tourists in the selected zone. 
                    Ensure the information is accurate and necessary.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowBroadcastModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Alert</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Alert Management</h1>
            <p className="text-gray-600 mt-1">Monitor and broadcast emergency alerts to tourists</p>
          </div>
          <button
            onClick={() => setShowBroadcastModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <Megaphone className="w-4 h-4" />
            <span>Broadcast Alert</span>
          </button>
        </div>

        {/* Zone Filters */}
        <div className="flex flex-wrap gap-2">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedZone === zone.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{zone.name}</span>
              <span className="text-xs opacity-75">({zone.count})</span>
            </button>
          ))}
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
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tourists Reached</p>
              <p className="text-2xl font-semibold text-gray-900">1,247</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Alerts Today</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Response Time</p>
              <p className="text-2xl font-semibold text-gray-900">2.1m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Alert History</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-lg border ${getAlertTypeColor(alert.type)}`}>
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{alert.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                          {alert.status}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getAlertTypeColor(alert.type)}`}>
                          {alert.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-3">{alert.message}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3 text-sm text-gray-600">
                      <div>
                        <p className="flex items-center mb-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span><strong>Zone:</strong> {alert.zone}</span>
                        </p>
                        <p className="flex items-center">
                          <strong className="mr-2">Target:</strong> {alert.targetArea}
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center mb-1">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{alert.time}</span>
                        </p>
                        <p className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{alert.recipients} tourists reached</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        Sent by: <strong>{alert.sentBy}</strong>
                      </p>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Broadcast Modal */}
      {showBroadcastModal && <BroadcastModal />}
    </div>
  );
}
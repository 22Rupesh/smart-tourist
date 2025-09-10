import React, { useState } from 'react';
import { 
  Bell, AlertTriangle, Info, CheckCircle, Filter, 
  Clock, MapPin, Users, Megaphone
} from 'lucide-react';

export default function AlertsPage() {
  const [filterType, setFilterType] = useState('all');
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [communityAlerts, setCommunityAlerts] = useState([
    {
      id: 1,
      user: 'Tourist_Bihar_123',
      message: 'Heavy traffic near Patna Junction. Use alternate routes.',
      location: 'Patna Junction',
      time: '15 minutes ago',
      verified: true
    },
    {
      id: 2,
      user: 'TravelSafe_User',
      message: 'Great local guide available at Golghar. Very helpful and honest pricing.',
      location: 'Golghar',
      time: '45 minutes ago',
      verified: false
    }
  ]);

  const alerts = [
    {
      id: 1,
      type: 'emergency',
      title: 'Emergency Alert - Road Closure',
      message: 'Avoid Route to Golghar due to VIP movement. Use alternate route via Fraser Road.',
      location: 'Golghar Area',
      time: '30 minutes ago',
      priority: 'high',
      read: false
    },
    {
      id: 2,
      type: 'safety',
      title: 'Safety Alert - Crowded Area',
      message: 'High crowd density detected at Gandhi Maidan. Keep belongings secure and stay alert.',
      location: 'Gandhi Maidan',
      time: '1 hour ago',
      priority: 'medium',
      read: false
    },
    {
      id: 3,
      type: 'weather',
      title: 'Weather Update',
      message: 'Light rain expected in the next 2 hours. Carry umbrella if visiting outdoor attractions.',
      location: 'Patna City',
      time: '2 hours ago',
      priority: 'low',
      read: true
    },
    {
      id: 4,
      type: 'info',
      title: 'Tourist Information',
      message: 'Special cultural program at Patna Museum today from 6-8 PM. Free entry for tourists.',
      location: 'Patna Museum',
      time: '3 hours ago',
      priority: 'low',
      read: true
    },
    {
      id: 5,
      type: 'security',
      title: 'Security Update',
      message: 'Increased security checks at railway stations. Allow extra time for travel.',
      location: 'All Railway Stations',
      time: '5 hours ago',
      priority: 'medium',
      read: true
    }
  ];

  const BroadcastModal = () => {
    const [alertData, setAlertData] = useState({
      type: 'safety',
      message: '',
      location: 'Gandhi Maidan, Patna'
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (alertData.message.trim()) {
        const newAlert = {
          id: Date.now(),
          user: user?.name || 'Anonymous',
          message: alertData.message,
          location: alertData.location,
          time: 'Just now',
          verified: false
        };
        setCommunityAlerts([newAlert, ...communityAlerts]);
        setAlertData({ type: 'safety', message: '', location: 'Gandhi Maidan, Patna' });
        setShowBroadcastModal(false);
        alert('Community alert sent successfully!');
      }
    };

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Send Community Alert</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alert Type</label>
              <select 
                value={alertData.type}
                onChange={(e) => setAlertData({...alertData, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="safety">Safety Warning</option>
                <option value="traffic">Traffic Update</option>
                <option value="recommendation">Recommendation</option>
                <option value="general">General Info</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={alertData.location}
                onChange={(e) => setAlertData({...alertData, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                value={alertData.message}
                onChange={(e) => setAlertData({...alertData, message: e.target.value})}
                placeholder="Share safety information with fellow tourists..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setShowBroadcastModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send Alert
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'safety':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'security':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600" />;
      case 'weather':
        return <Info className="w-5 h-5 text-gray-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredAlerts = filterType === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.type === filterType);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Alerts & Notifications</h1>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              {alerts.filter(a => !a.read).length} New
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'all', label: 'All Alerts' },
            { id: 'emergency', label: 'Emergency' },
            { id: 'safety', label: 'Safety' },
            { id: 'info', label: 'Information' },
            { id: 'weather', label: 'Weather' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setFilterType(filter.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filterType === filter.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Alerts */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Official Alerts</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-6 border-l-4 ${getPriorityColor(alert.priority)} ${
                    !alert.read ? 'bg-opacity-100' : 'bg-opacity-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getAlertIcon(alert.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm font-medium ${
                          !alert.read ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {alert.title}
                        </h3>
                        {!alert.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{alert.message}</p>
                      <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{alert.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Community Alerts</h2>
              <p className="text-sm text-gray-600 mt-1">Alerts shared by fellow tourists</p>
            </div>
            <div className="divide-y divide-gray-200">
              {communityAlerts.map((alert) => (
                <div key={alert.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{alert.user}</span>
                        {alert.verified && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-700">{alert.message}</p>
                      <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{alert.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Alert Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">High Priority</span>
                <span className="font-bold text-red-600">
                  {alerts.filter(a => a.priority === 'high').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Medium Priority</span>
                <span className="font-bold text-yellow-600">
                  {alerts.filter(a => a.priority === 'medium').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Low Priority</span>
                <span className="font-bold text-blue-600">
                  {alerts.filter(a => a.priority === 'low').length}
                </span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Unread</span>
                  <span className="font-bold text-gray-900">
                    {alerts.filter(a => !a.read).length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Send Community Alert */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Alert</h3>
            <p className="text-sm text-gray-600 mb-4">
              Help fellow tourists by sharing safety information
            </p>
            <button 
              onClick={() => setShowBroadcastModal(true)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Megaphone className="w-5 h-5" />
              <span>Send Community Alert</span>
            </button>
          </div>

          {/* Alert Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Emergency Alerts</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Safety Alerts</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Weather Updates</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Community Alerts</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast Modal */}
      {showBroadcastModal && <BroadcastModal />}
    </div>
  );
}
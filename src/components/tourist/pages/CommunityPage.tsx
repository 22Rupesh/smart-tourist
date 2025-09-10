import React, { useState } from 'react';
import { 
  MessageSquare, Users, AlertTriangle, MapPin, 
  Clock, ThumbsUp, Share, Flag, Send, Plus,
  Filter, Search, Bell, Eye, Heart
} from 'lucide-react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('feed');
  const [newMessage, setNewMessage] = useState('');

  const communityPosts = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: true,
        location: 'India Gate'
      },
      type: 'warning',
      message: 'Heads up! Pickpockets spotted near Karol Bagh metro station. Keep your belongings secure and stay alert. Police have been notified.',
      location: 'Karol Bagh Metro Station',
      time: '15 minutes ago',
      likes: 23,
      comments: 8,
      shares: 5,
      urgent: true
    },
    {
      id: 2,
      user: {
        name: 'Raj Patel',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: true,
        location: 'Red Fort'
      },
      type: 'tip',
      message: 'Amazing local guide at Red Fort! Mr. Sharma knows incredible stories about Mughal history. Very reasonable prices and speaks excellent English. Highly recommend!',
      location: 'Red Fort',
      time: '2 hours ago',
      likes: 45,
      comments: 12,
      shares: 18,
      urgent: false
    },
    {
      id: 3,
      user: {
        name: 'Emma Wilson',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: false,
        location: 'Chandni Chowk'
      },
      type: 'alert',
      message: 'Road closure on CP Outer Circle due to VIP movement. Heavy traffic expected until 6 PM. Use metro or alternate routes.',
      location: 'Connaught Place',
      time: '45 minutes ago',
      likes: 67,
      comments: 15,
      shares: 32,
      urgent: true
    },
    {
      id: 4,
      user: {
        name: 'Lisa Chen',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        verified: true,
        location: 'Lotus Temple'
      },
      type: 'recommendation',
      message: 'Beautiful sunset view from Lotus Temple today! Perfect weather and not too crowded. Great for photography. Remember to maintain silence inside the temple.',
      location: 'Lotus Temple',
      time: '3 hours ago',
      likes: 89,
      comments: 24,
      shares: 41,
      urgent: false
    }
  ];

  const nearbyTourists = [
    {
      id: 1,
      name: 'John Davis',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'India Gate',
      distance: '0.3 km',
      status: 'online',
      interests: ['Photography', 'History']
    },
    {
      id: 2,
      name: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Red Fort',
      distance: '1.2 km',
      status: 'away',
      interests: ['Culture', 'Food']
    },
    {
      id: 3,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Lotus Temple',
      distance: '2.8 km',
      status: 'online',
      interests: ['Architecture', 'Spirituality']
    }
  ];

  const safetyAlerts = [
    {
      id: 1,
      type: 'High Priority',
      message: 'Avoid Paharganj area after 9 PM - increased incidents reported',
      location: 'Paharganj',
      time: '1 hour ago',
      severity: 'high'
    },
    {
      id: 2,
      type: 'Traffic Alert',
      message: 'Heavy congestion on Ring Road - use metro for faster travel',
      location: 'Ring Road',
      time: '30 minutes ago',
      severity: 'medium'
    },
    {
      id: 3,
      type: 'Weather Update',
      message: 'Light rain expected - carry umbrella for outdoor attractions',
      location: 'Delhi NCR',
      time: '2 hours ago',
      severity: 'low'
    }
  ];

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'alert':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'tip':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'recommendation':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Community Hub</h1>
            <p className="text-gray-600 mt-1">Connect with fellow travelers and share safety information</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'feed', label: 'Community Feed' },
            { id: 'nearby', label: 'Nearby Tourists' },
            { id: 'alerts', label: 'Safety Alerts' },
            { id: 'groups', label: 'Travel Groups' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Community Feed */}
      {activeTab === 'feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Post Composer */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Share safety tips, warnings, or recommendations with fellow tourists..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-2">
                      <select className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Safety Warning</option>
                        <option>Travel Tip</option>
                        <option>Recommendation</option>
                        <option>General Alert</option>
                      </select>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-md">
                        <MapPin className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <Send className="w-4 h-4" />
                      <span>Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Posts */}
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                        {post.user.verified && (
                          <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                        )}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPostTypeColor(post.type)}`}>
                          {post.type}
                        </span>
                        {post.urgent && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            Urgent
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-3">{post.message}</p>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{post.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
                            <Share className="w-4 h-4" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                          <Flag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Users</span>
                  <span className="font-bold text-blue-600">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Posts Today</span>
                  <span className="font-bold text-green-600">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Safety Alerts</span>
                  <span className="font-bold text-red-600">12</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-2">
                {['#DelhiSafety', '#TravelTips', '#LocalGuides', '#FoodRecommendations', '#TransportUpdates'].map((topic, index) => (
                  <button key={index} className="block w-full text-left px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nearby Tourists */}
      {activeTab === 'nearby' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Nearby Tourists</h3>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {nearbyTourists.map((tourist) => (
              <div key={tourist.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={tourist.avatar}
                        alt={tourist.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        tourist.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{tourist.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{tourist.location}</span>
                        <span>•</span>
                        <span>{tourist.distance}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {tourist.interests.map((interest, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Connect
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Safety Alerts */}
      {activeTab === 'alerts' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Community Safety Alerts</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {safetyAlerts.map((alert) => (
              <div key={alert.id} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{alert.type}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{alert.message}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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
      )}

      {/* Travel Groups */}
      {activeTab === 'groups' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-96">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Travel Groups</h3>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Travel Groups Coming Soon</h3>
              <p className="text-gray-600">Create and join travel groups with fellow tourists.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
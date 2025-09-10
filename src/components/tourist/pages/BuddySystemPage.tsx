import React, { useState } from 'react';
import { 
  Users, MessageSquare, MapPin, Star, Clock, 
  Plus, Search, Filter, Heart, Phone, Video,
  DollarSign, Receipt, Calculator, Share
} from 'lucide-react';

export default function BuddySystemPage() {
  const [activeTab, setActiveTab] = useState('find');
  const [selectedBuddy, setSelectedBuddy] = useState<number | null>(null);

  const availableBuddies = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 28,
      nationality: 'British',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Connaught Place',
      distance: '0.5 km',
      rating: 4.8,
      reviews: 23,
      interests: ['Photography', 'History', 'Food'],
      languages: ['English', 'Hindi'],
      travelStyle: 'Cultural Explorer',
      verified: true,
      online: true
    },
    {
      id: 2,
      name: 'Emma Wilson',
      age: 24,
      nationality: 'American',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'India Gate',
      distance: '2.1 km',
      rating: 4.6,
      reviews: 18,
      interests: ['Adventure', 'Shopping', 'Nightlife'],
      languages: ['English'],
      travelStyle: 'Adventure Seeker',
      verified: true,
      online: false
    },
    {
      id: 3,
      name: 'Raj Patel',
      age: 32,
      nationality: 'Indian',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Red Fort',
      distance: '3.8 km',
      rating: 4.9,
      reviews: 31,
      interests: ['History', 'Architecture', 'Local Culture'],
      languages: ['English', 'Hindi', 'Gujarati'],
      travelStyle: 'Local Expert',
      verified: true,
      online: true
    }
  ];

  const myBuddies = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'active',
      lastSeen: 'Online',
      sharedExpenses: 2450,
      location: 'Lotus Temple'
    },
    {
      id: 2,
      name: 'Raj Patel',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      status: 'away',
      lastSeen: '2 hours ago',
      sharedExpenses: 1200,
      location: 'Qutub Minar'
    }
  ];

  const expenses = [
    {
      id: 1,
      description: 'Dinner at Karim Restaurant',
      amount: 1200,
      paidBy: 'You',
      splitWith: ['Sarah Johnson'],
      date: '2024-01-15',
      category: 'Food',
      settled: false
    },
    {
      id: 2,
      description: 'Metro tickets',
      amount: 120,
      paidBy: 'Sarah Johnson',
      splitWith: ['You'],
      date: '2024-01-15',
      category: 'Transport',
      settled: true
    },
    {
      id: 3,
      description: 'Red Fort entry tickets',
      amount: 70,
      paidBy: 'You',
      splitWith: ['Sarah Johnson', 'Raj Patel'],
      date: '2024-01-14',
      category: 'Attractions',
      settled: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Food':
        return 'bg-orange-100 text-orange-800';
      case 'Transport':
        return 'bg-blue-100 text-blue-800';
      case 'Attractions':
        return 'bg-purple-100 text-purple-800';
      case 'Shopping':
        return 'bg-pink-100 text-pink-800';
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
            <h1 className="text-2xl font-bold text-gray-900">Buddy System & Expense Tracker</h1>
            <p className="text-gray-600 mt-1">Connect with fellow travelers and manage shared expenses</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <Plus className="w-5 h-5" />
            <span>Add Expense</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'find', label: 'Find Buddies' },
            { id: 'my-buddies', label: 'My Buddies' },
            { id: 'expenses', label: 'Expenses' },
            { id: 'chat', label: 'Group Chat' }
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

      {/* Find Buddies Tab */}
      {activeTab === 'find' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search by name, interests, or location..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Locations</option>
                  <option>Within 1 km</option>
                  <option>Within 5 km</option>
                  <option>Within 10 km</option>
                </select>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Available Buddies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {availableBuddies.map((buddy) => (
              <div key={buddy.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={buddy.avatar}
                        alt={buddy.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {buddy.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{buddy.name}</h3>
                      <p className="text-sm text-gray-600">{buddy.age} • {buddy.nationality}</p>
                    </div>
                  </div>
                  {buddy.verified && (
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-gray-900">{buddy.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-medium text-gray-900">{buddy.distance}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900">{buddy.rating}</span>
                      <span className="text-gray-500">({buddy.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Interests:</p>
                  <div className="flex flex-wrap gap-1">
                    {buddy.interests.map((interest, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">Languages:</p>
                  <p className="text-sm text-gray-600">{buddy.languages.join(', ')}</p>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Connect
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <MessageSquare className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Buddies Tab */}
      {activeTab === 'my-buddies' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">My Travel Buddies</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {myBuddies.map((buddy) => (
              <div key={buddy.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={buddy.avatar}
                        alt={buddy.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        buddy.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{buddy.name}</h4>
                      <p className="text-sm text-gray-600">{buddy.lastSeen}</p>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{buddy.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">₹{buddy.sharedExpenses}</p>
                      <p className="text-xs text-gray-500">Shared expenses</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200">
                        <Video className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expenses Tab */}
      {activeTab === 'expenses' && (
        <div className="space-y-6">
          {/* Expense Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                  <p className="text-2xl font-semibold text-gray-900">₹3,820</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Receipt className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">You Owe</p>
                  <p className="text-2xl font-semibold text-red-600">₹635</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">You're Owed</p>
                  <p className="text-2xl font-semibold text-green-600">₹600</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expense List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Expenses</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {expenses.map((expense) => (
                <div key={expense.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-medium text-gray-900">{expense.description}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(expense.category)}`}>
                          {expense.category}
                        </span>
                        {expense.settled && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Settled
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <p><strong>Amount:</strong> ₹{expense.amount}</p>
                          <p><strong>Paid by:</strong> {expense.paidBy}</p>
                        </div>
                        <div>
                          <p><strong>Split with:</strong> {expense.splitWith.join(', ')}</p>
                          <p><strong>Date:</strong> {expense.date}</p>
                        </div>
                        <div>
                          <p><strong>Your share:</strong> ₹{Math.round(expense.amount / (expense.splitWith.length + 1))}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      {!expense.settled && (
                        <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                          Settle
                        </button>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Group Chat Tab */}
      {activeTab === 'chat' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-96">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Group Chat</h3>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Group Chat Coming Soon</h3>
              <p className="text-gray-600">Real-time messaging with your travel buddies will be available soon.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
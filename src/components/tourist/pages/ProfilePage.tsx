import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Shield, Edit3, Camera, CheckCircle } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const [emergencyContacts, setEmergencyContacts] = useState(user?.emergencyContacts || []);
  const [newContact, setNewContact] = useState({ name: '', phone: '', relation: '' });
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || ''
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
  };

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (newContact.name && newContact.phone && newContact.relation) {
      setEmergencyContacts([...emergencyContacts, newContact]);
      setNewContact({ name: '', phone: '', relation: '' });
      setShowAddContact(false);
    }
  };
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              {user?.avatar ? (
                <img
                  src="data:image/png;base64,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"
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white"
                />
              ) : (
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
              )}
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">Shivam</h1>
              <p className="text-blue-100 mt-1">Tourist ID: {user?.touristId}</p>
              <div className="flex items-center mt-2">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-blue-100">KYC Verified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">Shivam</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{user?.phone}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{user?.email}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">Gandhi Maidan, Patna, Bihar</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Safety Status</label>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Safe Zone - Score 85/100</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Account Status</label>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">Verified Tourist</span>
                </div>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.relation} • {contact.phone}</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setShowAddContact(true)}
          className="mt-4 w-full p-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
        >
          + Add Emergency Contact
        </button>
      </div>

      {/* Travel Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
              <option>Telugu</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Adventure</option>
              <option>Cultural</option>
              <option>Relaxation</option>
              <option>Business</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddContact && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add Emergency Contact</h3>
            </div>
            
            <form onSubmit={handleAddContact} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={newContact.name}
                  onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relation</label>
                <select
                  value={newContact.relation}
                  onChange={(e) => setNewContact({...newContact, relation: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select relation</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddContact(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
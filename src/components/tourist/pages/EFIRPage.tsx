import React, { useState } from 'react';
import { 
  FileText, Plus, Search, Filter, Clock, 
  MapPin, Camera, CheckCircle, AlertCircle,
  Eye, Download
} from 'lucide-react';

export default function EFIRPage() {
  const [activeTab, setActiveTab] = useState('file');
  const [showNewFIRModal, setShowNewFIRModal] = useState(false);
  const [existingFIRs, setExistingFIRs] = useState([
    {
      id: 'FIR2024001',
      title: 'Lost Wallet at Railway Station',
      type: 'Lost Property',
      status: 'Under Investigation',
      date: '2024-01-15',
      location: 'Patna Junction Railway Station',
      officer: 'Inspector Sharma',
      priority: 'Medium'
    },
    {
      id: 'FIR2024002',
      title: 'Harassment by Auto Driver',
      type: 'Harassment',
      status: 'Resolved',
      date: '2024-01-10',
      location: 'Gandhi Maidan',
      officer: 'Inspector Kumar',
      priority: 'High'
    }
  ]);


  const incidentTypes = [
    'Lost Property',
    'Theft',
    'Harassment',
    'Fraud',
    'Assault',
    'Road Accident',
    'Other'
  ];

  const NewFIRForm = () => {
    const [formData, setFormData] = useState({
      incidentType: '',
      title: '',
      description: '',
      location: 'Gandhi Maidan, Patna',
      dateTime: '',
      witnesses: '',
      evidence: []
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (formData.incidentType && formData.title && formData.description) {
        const newFIR = {
          id: 'FIR2024' + String(existingFIRs.length + 1).padStart(3, '0'),
          title: formData.title,
          type: formData.incidentType,
          status: 'Submitted',
          date: new Date().toISOString().split('T')[0],
          location: formData.location,
          officer: 'Pending Assignment',
          priority: 'Medium'
        };
        setExistingFIRs([newFIR, ...existingFIRs]);
        setShowNewFIRModal(false);
        setFormData({
          incidentType: '',
          title: '',
          description: '',
          location: 'Gandhi Maidan, Patna',
          dateTime: '',
          witnesses: '',
          evidence: []
        });
        alert('e-FIR submitted successfully! Reference ID: ' + newFIR.id);
      }
    };
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">File New e-FIR</h3>
              <button
                onClick={() => setShowNewFIRModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Incident Type
                </label>
                <select 
                  value={formData.incidentType}
                  onChange={(e) => setFormData({...formData, incidentType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select incident type</option>
                  {incidentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={formData.dateTime}
                  onChange={(e) => setFormData({...formData, dateTime: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Incident Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Brief description of the incident"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Where did the incident occur?"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Provide a detailed description of what happened..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Witnesses (if any)
              </label>
              <textarea
                rows={2}
                value={formData.witnesses}
                onChange={(e) => setFormData({...formData, witnesses: e.target.value})}
                placeholder="Names and contact details of witnesses..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Evidence
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600">
                  Upload photos, videos, or documents as evidence
                </p>
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Choose Files
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowNewFIRModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit e-FIR
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Investigation':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'Closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
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

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">e-FIR System</h1>
            <p className="text-gray-600 mt-1">File and track your incident reports online</p>
          </div>
          <button
            onClick={() => setShowNewFIRModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>File New e-FIR</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mt-6">
          <button
            onClick={() => setActiveTab('file')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === 'file'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            File e-FIR
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === 'track'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Track Status
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              activeTab === 'history'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My e-FIRs
          </button>
        </div>
      </div>

      {activeTab === 'file' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">How to File an e-FIR</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Choose Incident Type</h3>
                    <p className="text-sm text-gray-600">Select the appropriate category for your incident</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Provide Details</h3>
                    <p className="text-sm text-gray-600">Fill in all required information accurately</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Upload Evidence</h3>
                    <p className="text-sm text-gray-600">Attach photos, videos, or documents if available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Submit & Track</h3>
                    <p className="text-sm text-gray-600">Get your FIR number and track progress online</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900">Important Note</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      For emergency situations requiring immediate assistance, please call 100 or use the panic button instead of filing an e-FIR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Incident Types</h3>
              <div className="space-y-2">
                {incidentTypes.map((type) => (
                  <div key={type} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <span className="text-sm font-medium text-gray-900">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Police Emergency</span>
                  <span className="font-bold text-red-600">100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tourist Helpline</span>
                  <span className="font-bold text-blue-600">1363</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Medical Emergency</span>
                  <span className="font-bold text-green-600">102</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(activeTab === 'track' || activeTab === 'history') && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {activeTab === 'track' ? 'Track e-FIR Status' : 'My e-FIRs'}
              </h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search FIR ID..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    FIR Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Officer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {existingFIRs.map((fir) => (
                  <tr key={fir.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{fir.id}</div>
                        <div className="text-sm text-gray-900">{fir.title}</div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {fir.date}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {fir.location}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{fir.type}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(fir.status)}`}>
                        {fir.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${getPriorityColor(fir.priority)}`}>
                        {fir.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{fir.officer}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-green-600 hover:text-green-800">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showNewFIRModal && <NewFIRForm />}
    </div>
  );
}
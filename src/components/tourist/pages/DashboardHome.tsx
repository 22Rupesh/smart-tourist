import React, { useState } from 'react';
import { 
  Shield, MapPin, Phone, AlertTriangle, Camera, 
  Star, Clock, Navigation, Users, DollarSign,
  TrendingUp, Activity, CheckCircle, MessageSquare,
  Map, Route, X, Eye
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function DashboardHome() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [isPanicPressed, setIsPanicPressed] = useState(false);
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showServiceDetail, setShowServiceDetail] = useState<any>(null);
  const [showPlaceDetail, setShowPlaceDetail] = useState<any>(null);
  const [showAlertDetail, setShowAlertDetail] = useState<any>(null);

  const handlePanicButton = () => {
    setIsPanicPressed(true);
    setTimeout(() => {
      alert('Emergency alert sent to Bihar Police and emergency contacts!');
      setIsPanicPressed(false);
    }, 2000);
  };

  const safetyScore = 85;
  const currentLocation = "Gandhi Maidan, Patna, Bihar";

  const nearbyServices = [
    { 
      id: 1,
      name: 'AIIMS Patna', 
      type: 'Hospital', 
      distance: '2.3 km', 
      icon: '🏥',
      address: 'Phulwari Sharif, Patna, Bihar 801507',
      phone: '+91-612-2451070',
      rating: 4.8,
      services: ['Emergency Care', 'Surgery', 'OPD', 'ICU'],
      openHours: '24/7',
      description: 'Premier medical institute providing comprehensive healthcare services with state-of-the-art facilities.'
    },
    { 
      id: 2,
      name: 'Gandhi Maidan Police Station', 
      type: 'Police', 
      distance: '0.5 km', 
      icon: '🚔',
      address: 'Gandhi Maidan, Patna, Bihar 800001',
      phone: '100',
      rating: 4.2,
      services: ['Emergency Response', 'Tourist Help', 'FIR Filing', '24x7 Helpline'],
      openHours: '24/7',
      description: 'Main police station providing round-the-clock security and assistance to tourists.'
    },
    { 
      id: 3,
      name: 'Apollo Pharmacy', 
      type: 'Pharmacy', 
      distance: '1.1 km', 
      icon: '⚕️',
      address: 'Boring Road, Patna, Bihar 800001',
      phone: '+91-612-2234567',
      rating: 4.5,
      services: ['Medicines', 'Health Products', 'Home Delivery', 'Health Checkup'],
      openHours: '8:00 AM - 10:00 PM',
      description: 'Trusted pharmacy chain providing quality medicines and healthcare products.'
    },
    { 
      id: 4,
      name: 'SBI ATM', 
      type: 'ATM', 
      distance: '0.3 km', 
      icon: '🏧',
      address: 'Fraser Road, Patna, Bihar 800001',
      phone: '1800-11-2211',
      rating: 4.0,
      services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement', 'PIN Change'],
      openHours: '24/7',
      description: 'State Bank of India ATM with 24x7 cash withdrawal facility.'
    }
  ];

  const recommendedPlaces = [
    {
      id: 1,
      name: 'Golghar',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300',
      distance: '3.2 km',
      safetyRating: 'High',
      description: 'Historic granary built by Captain John Garstin in 1786, offering panoramic views of Patna.',
      address: 'Golghar, Patna, Bihar 800001',
      openHours: '9:00 AM - 6:00 PM',
      entryFee: '₹10 (Indians), ₹100 (Foreigners)',
      highlights: ['Historical Architecture', 'City Views', 'Photography Spot']
    },
    {
      id: 2,
      name: 'Patna Museum',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=300',
      distance: '4.1 km',
      safetyRating: 'High',
      description: 'State museum showcasing Bihar\'s rich cultural heritage and archaeological treasures.',
      address: 'Buddha Marg, Patna, Bihar 800001',
      openHours: '10:30 AM - 4:30 PM (Closed on Mondays)',
      entryFee: '₹15 (Indians), ₹300 (Foreigners)',
      highlights: ['Ancient Artifacts', 'Mauryan Period', 'Buddhist Sculptures']
    },
    {
      id: 3,
      name: 'Mahavir Mandir',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=300',
      distance: '2.7 km',
      safetyRating: 'High',
      description: 'Famous Hanuman temple near Patna Junction, one of the most visited temples in Bihar.',
      address: 'Patna Junction, Patna, Bihar 800001',
      openHours: '4:00 AM - 10:00 PM',
      entryFee: 'Free',
      highlights: ['Religious Significance', 'Daily Aarti', 'Peaceful Environment']
    }
  ];

  const activeAlerts = [
    { 
      id: 1,
      type: 'info', 
      message: 'High tourist activity in Golghar area - expect crowds', 
      time: '2 hours ago',
      location: 'Golghar, Patna',
      severity: 'Low',
      description: 'Increased tourist footfall due to weekend. Parking may be limited. Use public transport for convenience.'
    },
    { 
      id: 2,
      type: 'warning', 
      message: 'Traffic congestion on Boring Road due to construction work', 
      time: '45 minutes ago',
      location: 'Boring Road, Patna',
      severity: 'Medium',
      description: 'Road construction work causing traffic delays. Expected completion by next week. Use alternate routes via Fraser Road.'
    }
  ];

  const quickActions = [
    { name: 'Interactive Map', icon: Map, href: '/tourist/map', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Find Buddies', icon: Users, href: '/tourist/buddy', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Community', icon: MessageSquare, href: '/tourist/community', color: 'bg-purple-600 hover:bg-purple-700' },
    { name: 'Safe Routes', icon: Route, href: '/tourist/map', color: 'bg-orange-600 hover:bg-orange-700' }
  ];

  const IncidentReportModal = () => {
    const [incidentData, setIncidentData] = useState({
      type: '',
      title: '',
      description: '',
      location: currentLocation,
      severity: 'Medium'
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Incident reported successfully! Reference ID: INC-' + Date.now());
      setShowIncidentModal(false);
      setIncidentData({ type: '', title: '', description: '', location: currentLocation, severity: 'Medium' });
    };

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Report Incident</h3>
              <button onClick={() => setShowIncidentModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Incident Type</label>
                <select 
                  value={incidentData.type}
                  onChange={(e) => setIncidentData({...incidentData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select type</option>
                  <option value="theft">Theft</option>
                  <option value="harassment">Harassment</option>
                  <option value="fraud">Fraud</option>
                  <option value="medical">Medical Emergency</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
                <select 
                  value={incidentData.severity}
                  onChange={(e) => setIncidentData({...incidentData, severity: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={incidentData.title}
                onChange={(e) => setIncidentData({...incidentData, title: e.target.value})}
                placeholder="Brief description of the incident"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={incidentData.location}
                onChange={(e) => setIncidentData({...incidentData, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={4}
                value={incidentData.description}
                onChange={(e) => setIncidentData({...incidentData, description: e.target.value})}
                placeholder="Detailed description of what happened..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowIncidentModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                Report Incident
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const ServiceDetailModal = ({ service }: { service: any }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
            <button onClick={() => setShowServiceDetail(null)} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">{service.icon}</span>
            <div>
              <p className="font-medium text-gray-900">{service.type}</p>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{service.rating}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Address</p>
              <p className="text-sm text-gray-600">{service.address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Distance</p>
              <p className="text-sm text-gray-600">{service.distance}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Phone</p>
              <p className="text-sm text-gray-600">{service.phone}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Hours</p>
              <p className="text-sm text-gray-600">{service.openHours}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Services</p>
            <div className="flex flex-wrap gap-2">
              {service.services.map((s: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600">{service.description}</p>

          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const PlaceDetailModal = ({ place }: { place: any }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
            <button onClick={() => setShowPlaceDetail(null)} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <img src={place.image} alt={place.name} className="w-full h-48 object-cover rounded-lg" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{place.rating}</span>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              place.safetyRating === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {place.safetyRating} Safety
            </span>
          </div>

          <p className="text-gray-700">{place.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Address</p>
              <p className="text-sm text-gray-600">{place.address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Distance</p>
              <p className="text-sm text-gray-600">{place.distance}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Hours</p>
              <p className="text-sm text-gray-600">{place.openHours}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Entry Fee</p>
              <p className="text-sm text-gray-600">{place.entryFee}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Highlights</p>
            <div className="flex flex-wrap gap-2">
              {place.highlights.map((highlight: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Camera className="w-4 h-4" />
              <span>View Photos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AlertDetailModal = ({ alert }: { alert: any }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Alert Details</h3>
            <button onClick={() => setShowAlertDetail(null)} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${
              alert.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
            }`}>
              <AlertTriangle className={`w-5 h-5 ${
                alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
              }`} />
            </div>
            <div>
              <p className="font-medium text-gray-900">{alert.message}</p>
              <p className="text-sm text-gray-600">{alert.time}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Location</p>
              <p className="text-sm text-gray-600">{alert.location}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Severity</p>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                alert.severity === 'High' ? 'bg-red-100 text-red-800' :
                alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {alert.severity}
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Description</p>
            <p className="text-sm text-gray-600">{alert.description}</p>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View on Map
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Share Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{t('welcome')}, {user?.name?.split(' ')[0]}!</h2>
            <p className="mt-2 text-blue-100">Tourist ID: {user?.touristId}</p>
            <div className="flex items-center mt-3 text-blue-100">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{currentLocation}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{safetyScore}</div>
              <div className="text-sm text-blue-100">{t('safetyScore')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Emergency Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={handlePanicButton}
                disabled={isPanicPressed}
                className={`relative overflow-hidden rounded-lg p-6 text-white font-semibold text-lg transition-all duration-300 ${
                  isPanicPressed
                    ? 'bg-red-800 scale-95'
                    : 'bg-red-600 hover:bg-red-700 transform hover:scale-105'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <AlertTriangle className="w-6 h-6" />
                  <span>{isPanicPressed ? 'ALERTING...' : t('panicButton')}</span>
                </div>
                {isPanicPressed && (
                  <div className="absolute inset-0 bg-red-700/50 animate-pulse"></div>
                )}
              </button>
              
              <button 
                onClick={() => setShowIncidentModal(true)}
                className="bg-orange-600 hover:bg-orange-700 rounded-lg p-6 text-white font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Camera className="w-6 h-6" />
                  <span>Report Incident</span>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <a
                    key={index}
                    href={action.href}
                    className={`${action.color} rounded-lg p-4 text-white text-center transition-all duration-300 transform hover:scale-105`}
                  >
                    <IconComponent className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{action.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Safety Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Safety Score</p>
                  <p className="text-2xl font-bold text-green-600">{safetyScore}/100</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${safetyScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Check-ins Today</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Zone Status</p>
                  <p className="text-2xl font-bold text-emerald-600">Safe</p>
                </div>
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Activity className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Places */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recommendedPlaces')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedPlaces.map((place, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => setShowPlaceDetail(place)}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        place.safetyRating === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {place.safetyRating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-medium text-gray-900">{place.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{place.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{place.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Emergency Contacts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('emergencyContacts')}</h3>
            <div className="space-y-3">
              {user?.emergencyContacts?.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.relation}</p>
                  </div>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Services */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('nearbyServices')}</h3>
            <div className="space-y-3">
              {nearbyServices.map((service, index) => (
                <div 
                  key={index} 
                  onClick={() => setShowServiceDetail(service)}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{service.name}</p>
                    <p className="text-sm text-gray-600">{service.type} • {service.distance}</p>
                  </div>
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('activeAlerts')}</h3>
            <div className="space-y-3">
              {activeAlerts.map((alert, index) => (
                <div 
                  key={index} 
                  onClick={() => setShowAlertDetail(alert)}
                  className={`p-3 rounded-lg border-l-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' : 'bg-blue-50 border-blue-400'
                  }`}
                >
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showIncidentModal && <IncidentReportModal />}
      {showServiceDetail && <ServiceDetailModal service={showServiceDetail} />}
      {showPlaceDetail && <PlaceDetailModal place={showPlaceDetail} />}
      {showAlertDetail && <AlertDetailModal alert={showAlertDetail} />}
    </div>
  );
}
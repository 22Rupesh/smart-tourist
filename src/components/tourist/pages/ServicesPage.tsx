import React, { useState } from 'react';
import { Phone, MapPin, Clock, Navigation, Search, Guitar as Hospital, ShieldCheck, Car, CreditCard, Coffee, Share as Pharmacy, Fuel, Wifi } from 'lucide-react';

export default function ServicesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const serviceTypes = [
    { id: 'all', name: 'All Services', icon: Search },
    { id: 'emergency', name: 'Emergency', icon: Hospital },
    { id: 'police', name: 'Police', icon: ShieldCheck },
    { id: 'medical', name: 'Medical', icon: Hospital },
    { id: 'transport', name: 'Transport', icon: Car },
    { id: 'banking', name: 'Banking', icon: CreditCard },
    { id: 'food', name: 'Food & Dining', icon: Coffee }
  ];

  const services = [
    {
      id: 1,
      name: 'AIIMS Hospital',
      type: 'medical',
      category: 'Hospital',
      phone: '+91-11-26588500',
      address: 'Ansari Nagar, New Delhi - 110029',
      distance: '2.3 km',
      rating: 4.8,
      isOpen: true,
      openHours: '24/7',
      services: ['Emergency Care', 'Surgery', 'OPD'],
      isEmergency: true
    },
    {
      id: 2,
      name: 'Connaught Place Police Station',
      type: 'police',
      category: 'Police Station',
      phone: '100',
      address: 'Connaught Place, New Delhi - 110001',
      distance: '0.5 km',
      rating: 4.2,
      isOpen: true,
      openHours: '24/7',
      services: ['Emergency Response', 'Tourist Help', 'FIR Filing'],
      isEmergency: true
    },
    {
      id: 3,
      name: 'Apollo Pharmacy',
      type: 'medical',
      category: 'Pharmacy',
      phone: '+91-11-41414141',
      address: 'CP Market, Connaught Place',
      distance: '1.1 km',
      rating: 4.5,
      isOpen: true,
      openHours: '8:00 AM - 10:00 PM',
      services: ['Medicines', 'Health Products', 'Home Delivery']
    },
    {
      id: 4,
      name: 'Central Bank ATM',
      type: 'banking',
      category: 'ATM',
      phone: '1800-200-1911',
      address: 'Block A, Connaught Place',
      distance: '0.3 km',
      rating: 4.0,
      isOpen: true,
      openHours: '24/7',
      services: ['Cash Withdrawal', 'Balance Inquiry', 'Mini Statement']
    },
    {
      id: 5,
      name: 'Delhi Metro Rajiv Chowk',
      type: 'transport',
      category: 'Metro Station',
      phone: '155370',
      address: 'Connaught Place, New Delhi',
      distance: '0.8 km',
      rating: 4.3,
      isOpen: true,
      openHours: '5:00 AM - 11:00 PM',
      services: ['Blue Line', 'Yellow Line', 'Tourist Card']
    },
    {
      id: 6,
      name: 'Karim Hotel Restaurant',
      type: 'food',
      category: 'Restaurant',
      phone: '+91-11-23264981',
      address: '16, Gali Kababian, Jama Masjid',
      distance: '3.2 km',
      rating: 4.7,
      isOpen: true,
      openHours: '7:00 AM - 12:00 AM',
      services: ['Mughlai Cuisine', 'Halal Food', 'Takeaway']
    },
    {
      id: 7,
      name: 'Tourist Help Kiosk',
      type: 'emergency',
      category: 'Tourist Help',
      phone: '1363',
      address: 'India Gate Circle',
      distance: '3.5 km',
      rating: 4.1,
      isOpen: true,
      openHours: '9:00 AM - 6:00 PM',
      services: ['Information', 'Emergency Help', 'Maps']
    },
    {
      id: 8,
      name: 'HP Petrol Pump',
      type: 'transport',
      category: 'Fuel Station',
      phone: '+91-11-23456789',
      address: 'Barakhamba Road',
      distance: '1.8 km',
      rating: 4.0,
      isOpen: true,
      openHours: '6:00 AM - 10:00 PM',
      services: ['Petrol', 'Diesel', 'Air & Water']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesType = selectedType === 'all' || service.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'medical':
        return Hospital;
      case 'police':
        return ShieldCheck;
      case 'emergency':
        return Hospital;
      case 'transport':
        return Car;
      case 'banking':
        return CreditCard;
      case 'food':
        return Coffee;
      default:
        return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'police':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'medical':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'transport':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'banking':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'food':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Nearby Services</h1>
            <p className="text-gray-600 mt-1">Essential services and facilities near you</p>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full lg:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Service Type Filters */}
        <div className="flex flex-wrap gap-2 mt-6">
          {serviceTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{type.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Emergency Services Quick Access */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-red-100 rounded-full">
            <Hospital className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-lg font-semibold text-red-900">Emergency Contacts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">100</div>
              <div className="text-sm text-red-700">Police Emergency</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">102</div>
              <div className="text-sm text-red-700">Medical Emergency</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">1363</div>
              <div className="text-sm text-red-700">Tourist Helpline</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">101</div>
              <div className="text-sm text-red-700">Fire Emergency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const IconComponent = getServiceIcon(service.type);
          return (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(service.type).replace('text-', 'text-').replace('bg-', 'bg-').split(' ')[0]} ${getTypeColor(service.type).split(' ')[0]}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(service.type)}`}>
                      {service.category}
                    </span>
                  </div>
                </div>
                {service.isEmergency && (
                  <div className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                    24/7
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="flex-1">{service.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{service.openHours}</span>
                    {service.isOpen && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Open</span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-blue-600">{service.distance}</div>
                </div>
              </div>

              {service.services && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.services.slice(0, 3).map((serviceItem, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {serviceItem}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Navigation className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Map Integration Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-100 rounded-full">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Interactive Map View</h3>
            <p className="text-blue-700 text-sm">
              All services are shown with real-time locations and directions. Tap any service to get turn-by-turn navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
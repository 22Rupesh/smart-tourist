import React, { useState } from 'react';
import { 
  MapPin, Navigation, Layers, Search, Filter,
  AlertTriangle, Shield, Users, Camera, Zap,
  Clock, Phone, Star, Route
} from 'lucide-react';

export default function MapPage() {
  const [selectedLayer, setSelectedLayer] = useState('safety');
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const mapLayers = [
    { id: 'safety', name: 'Safety Zones', icon: Shield, color: 'text-green-600' },
    { id: 'incidents', name: 'Incidents', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'tourists', name: 'Tourists', icon: Users, color: 'text-blue-600' },
    { id: 'services', name: 'Services', icon: MapPin, color: 'text-purple-600' },
    { id: 'attractions', name: 'Attractions', icon: Camera, color: 'text-orange-600' }
  ];

  const safetyZones = [
    { id: 1, name: 'India Gate Complex', level: 'High', color: 'green', tourists: 324 },
    { id: 2, name: 'Red Fort Area', level: 'Medium', color: 'yellow', tourists: 198 },
    { id: 3, name: 'Chandni Chowk', level: 'Low', color: 'red', tourists: 89 }
  ];

  const nearbyIncidents = [
    {
      id: 1,
      type: 'Theft',
      location: 'Karol Bagh Market',
      time: '2 hours ago',
      severity: 'High',
      description: 'Pickpocketing reported in crowded market area'
    },
    {
      id: 2,
      type: 'Traffic',
      location: 'CP Outer Circle',
      time: '30 minutes ago',
      severity: 'Medium',
      description: 'Heavy traffic congestion due to VIP movement'
    }
  ];

  const nearbyServices = [
    {
      id: 1,
      name: 'AIIMS Hospital',
      type: 'Hospital',
      distance: '2.3 km',
      rating: 4.8,
      emergency: true
    },
    {
      id: 2,
      name: 'CP Police Station',
      type: 'Police',
      distance: '0.5 km',
      rating: 4.2,
      emergency: true
    },
    {
      id: 3,
      name: 'Central Bank ATM',
      type: 'ATM',
      distance: '0.3 km',
      rating: 4.0,
      emergency: false
    }
  ];

  const touristHotspots = [
    {
      id: 1,
      name: 'India Gate',
      visitors: 1284,
      rating: 4.8,
      safetyScore: 92,
      crowdLevel: 'High'
    },
    {
      id: 2,
      name: 'Red Fort',
      visitors: 956,
      rating: 4.7,
      safetyScore: 88,
      crowdLevel: 'Medium'
    },
    {
      id: 3,
      name: 'Lotus Temple',
      visitors: 621,
      rating: 4.6,
      safetyScore: 96,
      crowdLevel: 'Low'
    }
  ];

  const getZoneColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Interactive Safety Map</h1>
            <p className="text-gray-600 mt-1">Real-time safety monitoring and navigation assistance</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Route className="w-5 h-5 text-gray-600" />
              <span>Safe Route</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search locations, services, or attractions..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Map Controls */}
        <div className="space-y-6">
          {/* Layer Controls */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Layers</h3>
            <div className="space-y-2">
              {mapLayers.map((layer) => {
                const IconComponent = layer.icon;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                      selectedLayer === layer.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${layer.color}`} />
                    <span className="font-medium text-gray-900">{layer.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Location */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Location</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-medium text-gray-900">Connaught Place</p>
                  <p className="text-sm text-gray-600">Central Delhi, New Delhi</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Safety Score</span>
                  <span className="text-sm font-bold text-green-600">85/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-200">
                <Zap className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-800">Emergency Alert</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-800">Call for Help</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Find Buddies</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Map Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Real-time safety monitoring and navigation</p>
              </div>
              
              {/* Simulated Map Markers */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-12 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>

            {/* Map Legend */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Safe Zones</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Incidents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Attractions</span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Layers className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Information Panel */}
        <div className="space-y-6">
          {/* Safety Zones */}
          {selectedLayer === 'safety' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Zones</h3>
              <div className="space-y-3">
                {safetyZones.map((zone) => (
                  <div key={zone.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{zone.name}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getZoneColor(zone.level)}`}>
                        {zone.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{zone.tourists} tourists in area</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Incidents */}
          {selectedLayer === 'incidents' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Incidents</h3>
              <div className="space-y-3">
                {nearbyIncidents.map((incident) => (
                  <div key={incident.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{incident.type}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{incident.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{incident.location}</span>
                      <span>{incident.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Services */}
          {selectedLayer === 'services' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Services</h3>
              <div className="space-y-3">
                {nearbyServices.map((service) => (
                  <div key={service.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{service.name}</h4>
                      {service.emergency && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          Emergency
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{service.type}</span>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-gray-600">{service.rating}</span>
                        </div>
                        <span className="text-gray-500">{service.distance}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tourist Hotspots */}
          {selectedLayer === 'attractions' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tourist Hotspots</h3>
              <div className="space-y-3">
                {touristHotspots.map((spot) => (
                  <div key={spot.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{spot.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{spot.rating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>Visitors: {spot.visitors}</div>
                      <div>Safety: {spot.safetyScore}/100</div>
                      <div>Crowd: {spot.crowdLevel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
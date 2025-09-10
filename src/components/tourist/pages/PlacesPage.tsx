import React, { useState } from 'react';
import { 
  Star, MapPin, Clock, Camera, Filter, 
  Heart, Share, Navigation, Phone
} from 'lucide-react';

export default function PlacesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([1, 3]);

  const categories = [
    { id: 'all', name: 'All Places' },
    { id: 'monuments', name: 'Monuments' },
    { id: 'temples', name: 'Temples' },
    { id: 'museums', name: 'Museums' },
    { id: 'parks', name: 'Parks' },
    { id: 'markets', name: 'Markets' }
  ];

  const places = [
    {
      id: 1,
      name: 'India Gate',
      category: 'monuments',
      rating: 4.8,
      reviews: 12453,
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '3.2 km',
      safetyRating: 'High',
      description: 'A war memorial located in New Delhi, dedicated to the soldiers who died in World War I.',
      openHours: '24/7',
      entryFee: 'Free',
      bestTime: 'Evening (5-7 PM)',
      tips: ['Best for photography during sunset', 'Street food available nearby']
    },
    {
      id: 2,
      name: 'Red Fort',
      category: 'monuments',
      rating: 4.7,
      reviews: 8934,
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '4.1 km',
      safetyRating: 'High',
      description: 'Historic fortified palace of the Mughal emperors of India for nearly 200 years.',
      openHours: '9:00 AM - 6:00 PM',
      entryFee: '₹35 (Indians), ₹550 (Foreigners)',
      bestTime: 'Morning (9-11 AM)',
      tips: ['Carry water bottle', 'Audio guides available']
    },
    {
      id: 3,
      name: 'Lotus Temple',
      category: 'temples',
      rating: 4.6,
      reviews: 6782,
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '8.7 km',
      safetyRating: 'High',
      description: 'A Baháí House of Worship, notable for its flowerlike shape.',
      openHours: '9:00 AM - 5:30 PM (Closed Mondays)',
      entryFee: 'Free',
      bestTime: 'Morning (9-11 AM)',
      tips: ['Maintain silence inside', 'No photography inside temple']
    },
    {
      id: 4,
      name: 'Qutub Minar',
      category: 'monuments',
      rating: 4.5,
      reviews: 5621,
      image: 'https://images.pexels.com/photos/16347515/pexels-photo-16347515.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '12.3 km',
      safetyRating: 'High',
      description: 'A minaret and "victory tower" that forms part of the Qutb complex.',
      openHours: '7:00 AM - 5:00 PM',
      entryFee: '₹35 (Indians), ₹550 (Foreigners)',
      bestTime: 'Morning (7-9 AM)',
      tips: ['Wear comfortable shoes', 'Guided tours available']
    },
    {
      id: 5,
      name: 'Chandni Chowk',
      category: 'markets',
      rating: 4.3,
      reviews: 3421,
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '5.8 km',
      safetyRating: 'Medium',
      description: 'One of the oldest and busiest markets in Old Delhi.',
      openHours: '10:00 AM - 9:00 PM',
      entryFee: 'Free',
      bestTime: 'Evening (4-7 PM)',
      tips: ['Bargain for better prices', 'Try local street food', 'Keep valuables secure']
    },
    {
      id: 6,
      name: 'Humayuns Tomb',
      category: 'monuments',
      rating: 4.6,
      reviews: 4567,
      image: 'https://images.pexels.com/photos/11741049/pexels-photo-11741049.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '6.9 km',
      safetyRating: 'High',
      description: 'The tomb of the Mughal Emperor Humayun in Delhi, India.',
      openHours: '6:00 AM - 6:00 PM',
      entryFee: '₹35 (Indians), ₹550 (Foreigners)',
      bestTime: 'Morning (6-8 AM)',
      tips: ['Great for photography', 'UNESCO World Heritage Site']
    }
  ];

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.category === selectedCategory);

  const toggleFavorite = (placeId: number) => {
    setFavoriteIds(prev => 
      prev.includes(placeId)
        ? prev.filter(id => id !== placeId)
        : [...prev, placeId]
    );
  };

  const getSafetyColor = (rating: string) => {
    switch (rating) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-red-100 text-red-800';
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
            <h1 className="text-2xl font-bold text-gray-900">Recommended Places</h1>
            <p className="text-gray-600 mt-1">Discover the best tourist attractions in Delhi</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Filter</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyColor(place.safetyRating)}`}>
                  {place.safetyRating} Safety
                </span>
              </div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <button
                  onClick={() => toggleFavorite(place.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
                    favoriteIds.includes(place.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white/80 rounded-full text-gray-600 hover:bg-white transition-colors duration-200">
                  <Share className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                {place.distance}
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{place.rating}</span>
                  <span className="text-sm text-gray-500">({place.reviews})</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{place.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{place.openHours}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-green-600 font-medium">₹</span>
                  <span className="ml-1">{place.entryFee}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-gray-700 mb-1">Best Time:</p>
                <p className="text-xs text-gray-600">{place.bestTime}</p>
              </div>

              {place.tips && place.tips.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 mb-1">Tips:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {place.tips.slice(0, 2).map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm">Get Directions</span>
                </button>
                <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-gray-600" />
                </button>
                <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No places found</h3>
          <p className="text-gray-600">Try selecting a different category or check back later.</p>
        </div>
      )}
    </div>
  );
}
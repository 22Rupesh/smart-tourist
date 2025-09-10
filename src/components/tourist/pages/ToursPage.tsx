import React, { useState } from 'react';
import { 
  Calendar, Users, Star, MapPin, Clock, 
  Phone, MessageSquare, Filter, Heart,
  Camera, Utensils, Car
} from 'lucide-react';

export default function ToursPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([1]);

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'food', name: 'Food Tours' },
    { id: 'photography', name: 'Photography' },
    { id: 'spiritual', name: 'Spiritual' }
  ];

  const tours = [
    {
      id: 1,
      title: 'Old Delhi Heritage Walk',
      guide: 'Rajesh Kumar',
      category: 'heritage',
      rating: 4.9,
      reviews: 127,
      duration: '4 hours',
      groupSize: '8-12 people',
      price: '₹1,200',
      languages: ['English', 'Hindi', 'Bengali'],
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Explore the narrow lanes of Old Delhi, visit Jama Masjid, Red Fort, and experience the bustling Chandni Chowk market.',
      includes: ['Professional guide', 'Entry tickets', 'Traditional lunch', 'Transportation'],
      highlights: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Spice Market'],
      availability: 'Daily',
      phone: '+91-9876543210',
      verified: true
    },
    {
      id: 2,
      title: 'Delhi Food Street Tour',
      guide: 'Priya Sharma',
      category: 'food',
      rating: 4.8,
      reviews: 89,
      duration: '3 hours',
      groupSize: '6-10 people',
      price: '₹800',
      languages: ['English', 'Hindi'],
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Taste the authentic flavors of Delhi with visits to famous food joints and hidden gems.',
      includes: ['Food tastings', 'Local guide', 'Bottled water', 'Street food safety tips'],
      highlights: ['Paranthe Wali Gali', 'Karim Restaurant', 'Kulfi at India Gate', 'Street Chaat'],
      availability: 'Daily except Monday',
      phone: '+91-9876543211',
      verified: true
    },
    {
      id: 3,
      title: 'Spiritual Delhi Tour',
      guide: 'Amit Singh',
      category: 'spiritual',
      rating: 4.7,
      reviews: 64,
      duration: '5 hours',
      groupSize: '10-15 people',
      price: '₹1,500',
      languages: ['English', 'Hindi', 'Punjabi'],
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visit the most sacred places in Delhi including temples, gurudwaras, and meditation centers.',
      includes: ['Temple visits', 'Prayer ceremonies', 'Vegetarian lunch', 'AC transportation'],
      highlights: ['Lotus Temple', 'Akshardham', 'Gurudwara Bangla Sahib', 'ISKCON Temple'],
      availability: 'Tuesday to Sunday',
      phone: '+91-9876543212',
      verified: true
    },
    {
      id: 4,
      title: 'Photography Tour - Delhi Monuments',
      guide: 'Vikash Gupta',
      category: 'photography',
      rating: 4.6,
      reviews: 45,
      duration: '6 hours',
      groupSize: '4-8 people',
      price: '₹2,000',
      languages: ['English', 'Hindi'],
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Capture the best shots of Delhi\'s monuments with a professional photographer guide.',
      includes: ['Photography tips', 'Best shooting spots', 'Photo editing basics', 'Equipment advice'],
      highlights: ['India Gate sunrise', 'Red Fort architecture', 'Humayun\'s Tomb', 'Qutub Minar'],
      availability: 'Daily (weather permitting)',
      phone: '+91-9876543213',
      verified: false
    },
    {
      id: 5,
      title: 'Cultural Delhi Experience',
      guide: 'Sunita Devi',
      category: 'cultural',
      rating: 4.8,
      reviews: 78,
      duration: '4 hours',
      groupSize: '6-12 people',
      price: '₹1,000',
      languages: ['English', 'Hindi', 'Urdu'],
      image: 'https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experience Delhi\'s rich culture through art, music, dance, and local traditions.',
      includes: ['Cultural performances', 'Art gallery visits', 'Local crafts demonstration', 'Traditional tea'],
      highlights: ['National Museum', 'Crafts Museum', 'Local artist studios', 'Cultural center'],
      availability: 'Wednesday to Sunday',
      phone: '+91-9876543214',
      verified: true
    }
  ];

  const filteredTours = selectedCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const toggleFavorite = (tourId: number) => {
    setFavoriteIds(prev => 
      prev.includes(tourId)
        ? prev.filter(id => id !== tourId)
        : [...prev, tourId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Guided Tours</h1>
            <p className="text-gray-600 mt-1">Book experienced local guides for memorable experiences</p>
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

      {/* Tours Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {tour.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <button
                  onClick={() => toggleFavorite(tour.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
                    favoriteIds.includes(tour.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-sm font-bold">
                {tour.price}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>by {tour.guide}</span>
                    {tour.verified && (
                      <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{tour.rating}</span>
                  <span className="text-sm text-gray-500">({tour.reviews})</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{tour.availability}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  <span>{tour.languages.join(', ')}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Highlights:</p>
                <div className="flex flex-wrap gap-1">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                      {highlight}
                    </span>
                  ))}
                  {tour.highlights.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{tour.highlights.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Includes */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                <div className="grid grid-cols-2 gap-2">
                  {tour.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-gray-600" />
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <MessageSquare className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTours.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tours found</h3>
          <p className="text-gray-600">Try selecting a different category or check back later.</p>
        </div>
      )}

      {/* Guide Information */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Professional Local Guides</h3>
            <p className="text-blue-700 text-sm mb-3">
              All our guides are verified professionals with extensive knowledge of Delhi's history, culture, and hidden gems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Licensed & Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Multi-language Support</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Safety Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  image: string;
  patients?: string;
  education?: string;
  location?: string;
  availability?: string;
}

const allDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    experience: '15 years',
    rating: 4.9,
    image: '👩‍⚕️',
    patients: '2.5k+',
    education: 'MD, Harvard Medical School',
    location: 'Main Hospital',
    availability: 'Available Today',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Neurologist',
    experience: '12 years',
    rating: 4.8,
    image: '👨‍⚕️',
    patients: '1.8k+',
    education: 'MD, Johns Hopkins University',
    location: 'Main Hospital',
    availability: 'Available Tomorrow',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Pediatrician',
    experience: '10 years',
    rating: 4.9,
    image: '👩‍⚕️',
    patients: '3.2k+',
    education: 'MD, Stanford University',
    location: 'Children\'s Wing',
    availability: 'Available Today',
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Orthopedic Surgeon',
    experience: '18 years',
    rating: 4.7,
    image: '👨‍⚕️',
    patients: '2.1k+',
    education: 'MD, Mayo Clinic',
    location: 'Surgery Center',
    availability: 'Available This Week',
  },
  {
    id: '5',
    name: 'Dr. Lisa Anderson',
    specialization: 'Dermatologist',
    experience: '8 years',
    rating: 4.8,
    image: '👩‍⚕️',
    patients: '1.5k+',
    education: 'MD, Yale University',
    location: 'Dermatology Clinic',
    availability: 'Available Today',
  },
  {
    id: '6',
    name: 'Dr. Robert Taylor',
    specialization: 'Cardiologist',
    experience: '20 years',
    rating: 4.9,
    image: '👨‍⚕️',
    patients: '3.5k+',
    education: 'MD, Cleveland Clinic',
    location: 'Cardiac Center',
    availability: 'Available Tomorrow',
  },
  {
    id: '7',
    name: 'Dr. Maria Garcia',
    specialization: 'Pediatrician',
    experience: '14 years',
    rating: 4.8,
    image: '👩‍⚕️',
    patients: '2.8k+',
    education: 'MD, Boston Children\'s Hospital',
    location: 'Children\'s Wing',
    availability: 'Available Today',
  },
  {
    id: '8',
    name: 'Dr. David Kim',
    specialization: 'Neurologist',
    experience: '16 years',
    rating: 4.9,
    image: '👨‍⚕️',
    patients: '2.2k+',
    education: 'MD, Massachusetts General Hospital',
    location: 'Neurology Department',
    availability: 'Available This Week',
  },
];

const specializations = [
  'All Specializations',
  'Cardiologist',
  'Neurologist',
  'Pediatrician',
  'Orthopedic Surgeon',
  'Dermatologist',
];

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All Specializations');

  // Filter doctors based on search and specialization
  const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpecialization =
        selectedSpecialization === 'All Specializations' ||
        doctor.specialization === selectedSpecialization;
      return matchesSearch && matchesSpecialization;
    });
  }, [searchQuery, selectedSpecialization]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced healthcare professionals.
            Find the right doctor for your needs.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            {/* Specialization Filter */}
            <div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredDoctors.length}</span> doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Doctor Header */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center">
                  <div className="text-6xl mb-4">{doctor.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{doctor.name}</h3>
                  <p className="text-blue-100 font-medium">{doctor.specialization}</p>
                </div>

                {/* Doctor Details */}
                <div className="p-6">
                  {/* Rating and Experience */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-900 font-semibold">{doctor.rating}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{doctor.experience}</span>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-3 mb-6">
                    {doctor.education && (
                      <div className="flex items-start space-x-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>{doctor.education}</span>
                      </div>
                    )}
                    {doctor.location && (
                      <div className="flex items-start space-x-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{doctor.location}</span>
                      </div>
                    )}
                    {doctor.patients && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>👥 {doctor.patients} Patients</span>
                      </div>
                    )}
                    {doctor.availability && (
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                          {doctor.availability}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Book Appointment Button */}
                  <Link
                    href="/services"
                    className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Doctors;
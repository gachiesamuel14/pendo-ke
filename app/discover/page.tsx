'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const COUNTIES = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos', 'Kajiado',
  'Uasin Gishu', 'Meru', 'Kakamega', 'Bungoma', 'Kilifi', 'Kwale', 'Nyeri',
  // Add all 47 as needed
];

export default function Discover() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearby, setNearby] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation({ lat: latitude, lng: longitude });
          fetchNearby(latitude, longitude);
        },
        (err) => setError('Location permission needed for nearby matches.')
      );
    }
  }, []);

  async function fetchNearby(lat: number, lng: number) {
    const { data, error } = await supabase.rpc('get_nearby_users', {
      user_lat: lat,
      user_lng: lng,
      max_distance_km: 50,
    });
    if (data) setNearby(data);
    if (error) console.error(error);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-kenya-green">Discover Nearby</h1>
      {error && <p className="text-red-500">{error}</p>}
      {location && <p>Your location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}</p>}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {nearby.length === 0 && <p>No nearby profiles yet. Be the first!</p>}
        {nearby.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold">{user.name}, {user.age}</h2>
            <p className="text-sm text-gray-600">{user.county} • {user.distance_km?.toFixed(1)} km away</p>
            <p className="mt-2">{user.bio}</p>
            <button className="mt-2 bg-kenya-red text-white px-4 py-1 rounded">Like</button>
          </div>
        ))}
      </div>
    </div>
  );
}

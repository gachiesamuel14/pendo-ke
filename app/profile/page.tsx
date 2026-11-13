'use client';

import { useState } from 'react';

const COUNTIES = [
  'Nairobi City', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos',
  'Kajiado', 'Uasin Gishu', 'Meru', 'Kakamega', 'Bungoma', 'Kilifi',
  'Kwale', 'Nyeri', 'Murang\'a', 'Kirinyaga', 'Embu', 'Kitui', 'Makueni',
  'Nyandarua', 'Laikipia', 'Narok', 'Kericho', 'Bomet', 'Nandi',
  'Trans Nzoia', 'West Pokot', 'Turkana', 'Samburu', 'Elgeyo/Marakwet',
  'Baringo', 'Siaya', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira',
  'Vihiga', 'Busia', 'Garissa', 'Wajir', 'Mandera', 'Marsabit',
  'Isiolo', 'Tharaka-Nithi', 'Tana River', 'Lamu', 'Taita/Taveta'
];

export default function Profile() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    bio: '',
    county: '',
    interests: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to Supabase profiles + update location
    alert('Profile saved! (Connect to Supabase to persist)');
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-kenya-green">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border rounded"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded"
          value={form.county}
          onChange={(e) => setForm({ ...form, county: e.target.value })}
        >
          <option value="">Select County</option>
          {COUNTIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <textarea
          placeholder="Bio"
          className="w-full p-2 border rounded"
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />
        <input
          placeholder="Interests (comma separated)"
          className="w-full p-2 border rounded"
          value={form.interests}
          onChange={(e) => setForm({ ...form, interests: e.target.value })}
        />
        <button type="submit" className="w-full bg-kenya-green text-white p-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
}

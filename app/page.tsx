import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-kenya-green to-green-800 text-white min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4">Karibu to Pendo KE</h1>
        <p className="text-xl mb-8">Find love nearby in Kenya. Location-based matching across all 47 counties.</p>
        <div className="space-x-4">
          <Link href="/auth/signup" className="bg-kenya-red px-6 py-3 rounded-full font-semibold hover:bg-red-700">
            Get Started
          </Link>
          <Link href="/discover" className="bg-white text-kenya-green px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Discover Nearby
          </Link>
        </div>
        <p className="mt-12 text-sm opacity-80">Supporting Nairobi, Mombasa, Kisumu, Kiambu, and everywhere in between.</p>
      </div>
    </div>
  );
}

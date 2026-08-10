// app/hsk/page.tsx
import Link from 'next/link';
import { getAllLevels } from '@/app/data/vocabulary';

export default function HskPage() {
  const levels = getAllLevels();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Choose HSK Level</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {levels.map((level) => (
            <Link
              key={level}
              href={`/hsk/${level}`}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden group"
            >
              <div className="bg-blue-500 h-2"></div>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">HSK {level}</h2>
                <p className="text-gray-600">Click to view texts</p>
                <div className="mt-4 text-blue-500 group-hover:translate-x-1 transition-transform inline-block">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
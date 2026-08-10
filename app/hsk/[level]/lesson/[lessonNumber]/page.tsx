// app/hsk/[level]/lesson/[lessonNumber]/page.tsx
import Link from 'next/link';

interface LessonPageProps {
  params: Promise<{
    level: string;
    lessonNumber: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  // Await the params Promise
  const { level, lessonNumber } = await params;
  const texts = [1, 2];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link href={`/hsk/${level}`} className="text-blue-500 hover:underline">
            ← Back to Lessons
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-2">
          HSK {level} - Lesson {lessonNumber}
        </h1>
        <p className="text-gray-600 mb-10">Select a text to read</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {texts.map((text) => (
            <Link
              key={text}
              href={`/hsk/${level}/lesson/${lessonNumber}/text/${text}`}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden group"
            >
              <div className="bg-purple-500 h-2"></div>
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Text {text}</h2>
                <p className="text-gray-600">Read and learn</p>
                <div className="mt-4 text-purple-500 group-hover:translate-x-1 transition-transform inline-block">
                  Read →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
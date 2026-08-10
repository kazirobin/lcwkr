// app/hsk/[level]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLevelLessonData } from '@/app/data/vocabulary';

interface LevelPageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function LevelPage({ params }: LevelPageProps) {
  const { level } = await params;
  const levelNum = parseInt(level);
  
  // Get all lessons with their texts for this HSK level
  const lessons = getLevelLessonData(levelNum);
  
  if (lessons.length === 0) {
    notFound();
  }
  
  // Calculate total vocabulary for the level
  const totalVocabulary = lessons.reduce((sum, lesson) => sum + lesson.totalVocabulary, 0);
  const totalTexts = lessons.reduce((sum, lesson) => sum + lesson.texts.length, 0);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/hsk" className="text-blue-500 hover:underline inline-flex items-center">
            ← Back to HSK Levels
          </Link>
        </div>
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">HSK Level {level}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <span>📚 {lessons.length} Lessons</span>
            <span>📝 {totalTexts} Texts</span>
            <span>📖 {totalVocabulary} Vocabulary Words</span>
          </div>
        </div>
        
        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.lesson}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden"
            >
              {/* Lesson Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">
                  Lesson {lesson.lesson}
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  {lesson.texts.length} texts • {lesson.totalVocabulary} vocabulary
                </p>
              </div>
              
              {/* Texts List */}
              <div className="p-6 space-y-3">
                {lesson.texts.map((text) => (
                  <Link
                    key={text}
                    href={`/hsk/${level}/lesson/${lesson.lesson}/text/${text}`}
                    className="block group"
                  >
                    <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                      <div>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600">
                          Text {text}
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          Vocabulary
                        </span>
                      </div>
                      <span className="text-blue-500 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// app/hsk/[level]/lesson/[lessonNumber]/text/[textNumber]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonTextData } from '@/app/data/vocabulary';
import VocabularyList from './../../../../../../../components/vocabulary/VocabularyList';

interface TextPageProps {
  params: Promise<{
    level: string;
    lessonNumber: string;
    textNumber: string;
  }>;
}

export default async function TextPage({ params }: TextPageProps) {
  const { level, lessonNumber, textNumber } = await params;
  
  const levelNum = parseInt(level);
  const lessonNum = parseInt(lessonNumber);
  const textNum = parseInt(textNumber);
  
  // Get the data for this specific lesson and text
  const data = getLessonTextData(levelNum, lessonNum, textNum);
  
  if (!data) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6">
          <Link href={`/hsk/${level}`} className="text-blue-500 hover:underline">
            ← Back to Level {level} Lessons List
          </Link>
        </div>
        
        <VocabularyList data={data} level={level} text={textNumber} />
      </div>
    </div>
  );
}
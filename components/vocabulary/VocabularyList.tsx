'use client';


import type { VocabularyData } from '@/app/types/vocabulary';
import VocabularyCard from './VocabularyCard';

interface VocabularyListProps {
  data: VocabularyData;
}

export default function VocabularyList({ data }: VocabularyListProps) {
  return (
    <div>
      <div className="mb-6 p-4 rounded-xl bg-background border border-secondary">
        <h2 className="text-xl font-bold text-primary">
          Lesson {data.lesson} - Text {data.text}
        </h2>
        <p className="text-sm opacity-60 text-text">
          Vocabulary List
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.vocabulary.map((item, index) => (
          <VocabularyCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
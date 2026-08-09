// components/vocabulary/VocabularyList.tsx

'use client';

import { VocabularyData } from '@/app/types/vocabulary';
import DialogueComponent from './Dialogue';
import VocabularyCard from './VocabularyCard';

interface VocabularyListProps {
  data: VocabularyData;
}

export default function VocabularyList({ data }: VocabularyListProps) {
  return (
    <div className="space-y-8">
      {/* Dialogue */}
      {data.dialogue && (
        <div className="mb-8">
          <DialogueComponent dialogue={data.dialogue} />
        </div>
      )}

      {/* Lesson Header */}
      <div className="flex items-center justify-between border-b border-secondary/20 dark:border-secondary/20 pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text">
            Lesson {data.lesson} - Text {data.text}
          </h2>
          <p className="text-text/60 dark:text-text/60 mt-1">
            {data.vocabulary.length} vocabulary words
          </p>
        </div>
        <div className="px-4 py-2 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary rounded-full text-sm font-medium">
          Total: {data.vocabulary.length}
        </div>
      </div>

      {/* Vocabulary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.vocabulary.map((item, index) => (
          <VocabularyCard key={index} vocabulary={item} />
        ))}
      </div>
    </div>
  );
}
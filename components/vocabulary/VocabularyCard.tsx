// components/vocabulary/VocabularyCard.tsx

'use client';

import { VocabularyItem } from '@/app/types/vocabulary';
import { useState } from 'react';

interface VocabularyCardProps {
  vocabulary: VocabularyItem;
}

export default function VocabularyCard({ vocabulary }: VocabularyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-background dark:bg-background rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-secondary/20 dark:border-secondary/20 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-text dark:text-text">
              {vocabulary.hanzi}
            </h3>
            <p className="text-sm text-text/60 dark:text-text/60 mt-1">
              {vocabulary.pinyin}
            </p>
          </div>
          <span className="px-3 py-1 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary rounded-full text-xs font-medium whitespace-nowrap ml-2">
            {vocabulary.english}
          </span>
        </div>

        {/* Bengali */}
        <p className="text-text/80 dark:text-text/80 mt-2 text-sm font-bn">
          {vocabulary.bangla}
        </p>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-secondary/20 dark:border-secondary/20 space-y-3 animate-fade-in">
            {/* Characters */}
            {vocabulary.characters && vocabulary.characters.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-text/60 dark:text-text/60 uppercase tracking-wider mb-2">
                  ✏️ Characters
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vocabulary.characters.map((char, idx) => (
                    <div key={idx} className="bg-secondary/10 dark:bg-secondary/10 px-3 py-1.5 rounded-lg">
                      <span className="font-medium text-text dark:text-text">{char.hanzi}</span>
                      <span className="text-xs text-text/60 dark:text-text/60 ml-2">
                        {char.pinyin}
                      </span>
                      <span className="text-xs text-text/60 dark:text-text/60 ml-1">
                        ({char.meaning})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Example */}
            {vocabulary.example && (
              <div>
                <h4 className="text-xs font-semibold text-text/60 dark:text-text/60 uppercase tracking-wider mb-2">
                  💬 Example
                </h4>
                <div className="bg-secondary/5 dark:bg-secondary/5 p-3 rounded-lg space-y-1">
                  <p className="text-text dark:text-text font-medium">
                    {vocabulary.example.hanzi}
                  </p>
                  <p className="text-sm text-text/60 dark:text-text/60">
                    {vocabulary.example.pinyin}
                  </p>
                  <p className="text-sm text-text/80 dark:text-text/80 font-en">
                    {vocabulary.example.english}
                  </p>
                  <p className="text-sm text-text/80 dark:text-text/80 font-bn">
                    {vocabulary.example.bangla}
                  </p>
                </div>
              </div>
            )}

            {/* Similar Words */}
            {vocabulary.similar && vocabulary.similar.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-text/60 dark:text-text/60 uppercase tracking-wider mb-2">
                  🔄 Similar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vocabulary.similar.map((sim, idx) => (
                    <div key={idx} className="px-3 py-1 bg-accent/20 dark:bg-accent/20 rounded-full">
                      <span className="text-sm text-text dark:text-text">
                        {sim.hanzi} 
                      </span>
                      <span className="text-xs text-text/60 dark:text-text/60 ml-1">
                        ({sim.pinyin})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Toggle Button */}
        <button 
          className="mt-3 text-sm text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 transition-colors font-medium"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 'Show less ▲' : 'Show more ▼'}
        </button>
      </div>
    </div>
  );
}
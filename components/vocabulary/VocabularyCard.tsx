'use client';

import { VocabularyItem } from '@/app/types/vocabulary';
import { useState } from 'react';

interface VocabularyCardProps {
  vocabulary: VocabularyItem;
}

export default function VocabularyCard({ vocabulary }: VocabularyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800">
              {vocabulary.hanzi}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {vocabulary.pinyin}
            </p>
          </div>
          <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs font-medium whitespace-nowrap ml-2">
            {vocabulary.english}
          </span>
        </div>

        {/* Bengali */}
        <p className="text-gray-700 mt-2 text-sm">
          {vocabulary.bangla}
        </p>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            {/* Characters */}
            {vocabulary.characters && vocabulary.characters.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  ✏️ Characters
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vocabulary.characters.map((char, idx) => (
                    <div key={idx} className="bg-gray-100 px-3 py-1.5 rounded-lg">
                      <span className="font-medium text-gray-800">{char.hanzi}</span>
                      <span className="text-xs text-gray-600 ml-2">
                        {char.pinyin}
                      </span>
                      <span className="text-xs text-gray-600 ml-1">
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
                <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  💬 Example
                </h4>
                <div className="bg-gray-50 p-3 rounded-lg space-y-1">
                  <p className="text-gray-800 font-medium">
                    {vocabulary.example.hanzi}
                  </p>
                  <p className="text-sm text-gray-600">
                    {vocabulary.example.pinyin}
                  </p>
                  <p className="text-sm text-gray-700">
                    {vocabulary.example.english}
                  </p>
                  <p className="text-sm text-gray-700">
                    {vocabulary.example.bangla}
                  </p>
                </div>
              </div>
            )}

            {/* Similar Words */}
            {vocabulary.similar && vocabulary.similar.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  🔄 Similar
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vocabulary.similar.map((sim, idx) => (
                    <div key={idx} className="px-3 py-1 bg-purple-50 rounded-full">
                      <span className="text-sm text-gray-800">
                        {sim.hanzi} 
                      </span>
                      <span className="text-xs text-gray-600 ml-1">
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
          className="mt-3 text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less ▲' : 'Show more ▼'}
        </button>
      </div>
    </div>
  );
}
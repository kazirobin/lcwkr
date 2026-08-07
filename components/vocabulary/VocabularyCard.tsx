'use client';

import type { VocabularyItem } from "@/app/types/vocabulary";



interface VocabularyCardProps {
  item: VocabularyItem;
  index: number;
}

export default function VocabularyCard({ item, index }: VocabularyCardProps) {
  const numberStr = String(index + 1).padStart(2, '0');

  return (
    <div className="bg-background border border-secondary rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:border-primary">
      {/* Header with number */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-primary">
          {numberStr}
        </span>
        <div className="flex gap-2 flex-wrap">
          {item.characters.map((char, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded bg-secondary text-text"
            >
              {char.hanzi} ({char.pinyin})
            </span>
          ))}
        </div>
      </div>

      {/* Main vocabulary */}
      <div className="mb-3">
        <h3 className="text-3xl font-bold text-primary">
          {item.hanzi}
        </h3>
        <p className="text-sm">
          {item.pinyin}
        </p>
      </div>

      {/* Meanings */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div>
          <p className="text-xs opacity-60 text-text">English</p>
          <p className="font-medium text-text">{item.english}</p>
        </div>
        <div>
          <p className="text-xs opacity-60 text-text">Bangla</p>
          <p className="font-medium text-text font-bn">{item.bangla}</p>
        </div>
      </div>

      {/* Example */}
      <div className="bg-secondary rounded-lg p-3 mb-3 border-l-4 border-accent">
        <p className="text-sm font-medium text-text">{item.example.hanzi}</p>
        <p className="text-xs opacity-60 text-text">{item.example.pinyin}</p>
        <div className="grid grid-cols-2 gap-2 mt-1">
          <p className="text-xs text-text">{item.example.english}</p>
          <p className="text-xs text-text font-bn">{item.example.bangla}</p>
        </div>
      </div>

      {/* Similar words */}
      {item.similar.length > 0 && (
        <div>
          <p className="text-xs opacity-60 text-text mb-1">Similar:</p>
          <div className="flex gap-2 flex-wrap">
            {item.similar.map((sim, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-secondary border border-secondary text-text"
              >
                {sim.hanzi} ({sim.pinyin}) - {sim.english}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
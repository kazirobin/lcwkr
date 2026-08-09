// components/vocabulary/Dialogue.tsx

'use client';

import { Dialogue } from '@/app/types/vocabulary';

interface DialogueProps {
  dialogue: Dialogue;
}

export default function DialogueComponent({ dialogue }: DialogueProps) {
  return (
    <div className="bg-background dark:bg-background rounded-xl shadow-lg overflow-hidden border border-secondary/20 dark:border-secondary/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          💬 {dialogue.title}
        </h3>
      </div>

      {/* Dialogue Lines */}
      <div className="p-6 space-y-4">
        {dialogue.lines.map((line, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-3 rounded-lg transition-all ${
              line.speaker === 'Teacher'
                ? 'bg-primary/10 dark:bg-primary/10 border-l-4 border-primary'
                : line.speaker === 'Students'
                ? 'bg-secondary/10 dark:bg-secondary/10 border-l-4 border-secondary'
                : 'bg-background/50 dark:bg-background/50 border-l-4 border-text/20'
            }`}
          >
            {/* Speaker */}
            <div className="flex-shrink-0 min-w-[80px]">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                line.speaker === 'Teacher'
                  ? 'bg-primary text-white dark:bg-primary dark:text-white'
                  : line.speaker === 'Students'
                  ? 'bg-secondary text-white dark:bg-secondary dark:text-white'
                  : 'bg-text/10 text-text dark:bg-text/10 dark:text-text'
              }`}>
                {line.speaker}
              </span>
            </div>

            {/* Dialogue Text */}
            <div className="flex-1 space-y-1">
              <p className="text-lg font-medium text-text dark:text-text">
                {line.hanzi}
              </p>
              <p className="text-sm text-text/60 dark:text-text/60">
                {line.pinyin}
              </p>
              <p className="text-sm text-text/80 dark:text-text/80 font-en">
                {line.english}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
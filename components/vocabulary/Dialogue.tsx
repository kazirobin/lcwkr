'use client';

import { Dialogue } from '@/app/types/vocabulary';

interface DialogueComponentProps {
  dialogue: Dialogue;
}

export default function DialogueComponent({ dialogue }: DialogueComponentProps) {
  // Get the speaker color
  const getSpeakerColor = (speaker: string): string => {
    const colors: Record<string, string> = {
      'Teacher': 'bg-blue-500',
      'Students': 'bg-purple-500',
      'Customer': 'bg-green-500',
      'Waiter': 'bg-orange-500',
      'Shop Assistant': 'bg-pink-500',
      'A': 'bg-indigo-500',
      'B': 'bg-teal-500',
    };
    return colors[speaker] || 'bg-gray-500';
  };

  // Get the border color
  const getBorderColor = (speaker: string): string => {
    const colors: Record<string, string> = {
      'Teacher': 'border-blue-500',
      'Students': 'border-purple-500',
      'Customer': 'border-green-500',
      'Waiter': 'border-orange-500',
      'Shop Assistant': 'border-pink-500',
      'A': 'border-indigo-500',
      'B': 'border-teal-500',
    };
    return colors[speaker] || 'border-gray-400';
  };

  // Get the background color
  const getBgColor = (speaker: string): string => {
    const colors: Record<string, string> = {
      'Teacher': 'bg-blue-50',
      'Students': 'bg-purple-50',
      'Customer': 'bg-green-50',
      'Waiter': 'bg-orange-50',
      'Shop Assistant': 'bg-pink-50',
      'A': 'bg-indigo-50',
      'B': 'bg-teal-50',
    };
    return colors[speaker] || 'bg-gray-50';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          💬 {dialogue.title}
        </h3>
      </div>

      <div className="p-6 space-y-4">
        {dialogue.lines.map((line, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-3 rounded-lg transition-all ${getBgColor(line.speaker)} border-l-4 ${getBorderColor(line.speaker)}`}
          >
            <div className="flex-shrink-0 min-w-[80px]">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getSpeakerColor(line.speaker)}`}>
                {line.speaker}
              </span>
            </div>

            <div className="flex-1 space-y-1">
              <p className="text-lg font-medium text-gray-800">
                {line.hanzi}
              </p>
              <p className="text-sm text-gray-600">
                {line.pinyin}
              </p>
              <p className="text-sm text-gray-700">
                {line.english}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
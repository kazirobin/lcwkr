'use client';

import { useState } from 'react';
import {vocabularyDataArray } from '../data/vocabularyData';
import VocabularyList from './../../components/vocabulary/VocabularyList';

export default function VocabularyPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background text-text">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Dropdown selector */}
        <div className="mb-6">
          <select
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(Number(e.target.value))}
            className="px-4 py-2 rounded-lg border border-secondary bg-background text-text focus:outline-none focus:border-primary"
          >
            {vocabularyDataArray.map((data, index) => (
              <option key={index} value={index}>
                Lesson {data.lesson} - Text {data.text}
              </option>
            ))}
          </select>
        </div>

        <VocabularyList data={vocabularyDataArray[selectedIndex]} />
      </main>
    </div>
  );
}
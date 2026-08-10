"use client";

import { VocabularyData } from "@/types/vocabulary";
import DialogueComponent from "./Dialogue";
import VocabularyCard from "./VocabularyCard";
import { getTextsForLesson } from "@/data/vocabulary";
import Link from "next/link";

interface VocabularyListProps {
  data: VocabularyData;
  level: string;
  text: string;
}

export default function VocabularyList({
  data,
  level,
  text,
}: VocabularyListProps) {
  const levelNum = parseInt(level);
  const textNum = parseInt(text);
  const lessonNum = data.lesson;

  // Get all texts for this lesson
  const textsInLesson = getTextsForLesson(levelNum, lessonNum);
  const currentIndex = textsInLesson.indexOf(textNum);

  // Get prev and next within the same lesson
  const prevText = currentIndex > 0 ? textsInLesson[currentIndex - 1] : null;
  const nextText =
    currentIndex < textsInLesson.length - 1
      ? textsInLesson[currentIndex + 1]
      : null;

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-4">
          {prevText && (
            <Link
              href={`/hsk/${level}/lesson/${lessonNum}/text/${prevText}`}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              ← Previous
            </Link>
          )}
        </div>

        <div className="flex gap-2">
          <Link
            href={`/hsk/${level}`}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Back to Level {level} Less
          </Link>
        </div>

        <div className="flex gap-4">
          {nextText && (
            <Link
              href={`/hsk/${level}/lesson/${lessonNum}/text/${nextText}`}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              Next →
            </Link>
          )}
        </div>
      </div>

      {/* Quick navigation to all texts in this lesson */}
      {textsInLesson.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-gray-500">Jump to:</span>
          {textsInLesson.map((t) => (
            <Link
              key={t}
              href={`/hsk/${level}/lesson/${lessonNum}/text/${t}`}
              className={`px-3 py-1 rounded-lg transition-colors ${
                t === textNum
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Text {t}
            </Link>
          ))}
        </div>
      )}

      {/* Dialogue */}
      {data.dialogue && (
        <div className="mb-8">
          <DialogueComponent dialogue={data.dialogue} />
        </div>
      )}

      {/* Lesson Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            HSK {level} - Lesson {lessonNum} - Text {text}
          </h2>
          <p className="text-gray-600 mt-1">
            {data.vocabulary.length} vocabulary words
          </p>
        </div>
        <div className="px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
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

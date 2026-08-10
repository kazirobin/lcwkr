// app/data/vocabulary/index.ts
import {
  VocabularyData,
  VocabularyDataMap,
  LevelInfo,
  LevelTextKey,
} from "@/types/vocabulary";

// ============ HSK 1 IMPORTS ============
// Lesson 1
import { lesson1Text1Data } from "./hsk1/lesson1/text1";
import { lesson1Text2Data } from "./hsk1/lesson1/text2";
import { lesson1Text3Data } from "./hsk1/lesson1/text3";

// Lesson 2
import { lesson2Text1Data } from "./hsk1/lesson2/text1";
import { lesson2Text2Data } from "./hsk1/lesson2/text2";
import { lesson2Text3Data } from "./hsk1/lesson2/text3";

// Lesson 3
import { lesson3Text1Data } from "./hsk1/lesson3/text1";
import { lesson3Text2Data } from "./hsk1/lesson3/text2";
import { lesson3Text3Data } from "./hsk1/lesson3/text3";

// Lesson 4
import { lesson4Text1Data } from "./hsk1/lesson4/text1";
import { lesson4Text2Data } from "./hsk1/lesson4/text2";
import { lesson4Text3Data } from "./hsk1/lesson4/text3";

// Lesson 5
import { lesson5Text1Data } from "./hsk1/lesson5/text1";
import { lesson5Text2Data } from "./hsk1/lesson5/text2";
import { lesson5Text3Data } from "./hsk1/lesson5/text3";

// Lesson 6
import { lesson6Text1Data } from "./hsk1/lesson6/text1";
import { lesson6Text2Data } from "./hsk1/lesson6/text2";
import { lesson6Text3Data } from "./hsk1/lesson6/text3";

// Lesson 7
import { lesson7Text1Data } from "./hsk1/lesson7/text1";
import { lesson7Text2Data } from "./hsk1/lesson7/text2";
import { lesson7Text3Data } from "./hsk1/lesson7/text3";

// Lesson 8
import { lesson8Text1Data } from "./hsk1/lesson8/text1";
import { lesson8Text2Data } from "./hsk1/lesson8/text2";
import { lesson8Text3Data } from "./hsk1/lesson8/text3";

// Lesson 9
import { lesson9Text1Data } from "./hsk1/lesson9/text1";
import { lesson9Text2Data } from "./hsk1/lesson9/text2";
import { lesson9Text3Data } from "./hsk1/lesson9/text3";

// Lesson 10
import { lesson10Text1Data } from "./hsk1/lesson10/text1";
import { lesson10Text2Data } from "./hsk1/lesson10/text2";
import { lesson10Text3Data } from "./hsk1/lesson10/text3";

// Lesson 11
import { lesson11Text1Data } from "./hsk1/lesson11/text1";
import { lesson11Text2Data } from "./hsk1/lesson11/text2";
import { lesson11Text3Data } from "./hsk1/lesson11/text3";

// Lesson 12
import { lesson12Text1Data } from "./hsk1/lesson12/text1";
import { lesson12Text2Data } from "./hsk1/lesson12/text2";
import { lesson12Text3Data } from "./hsk1/lesson12/text3";

// Lesson 13
import { lesson13Text1Data } from "./hsk1/lesson13/text1";
import { lesson13Text2Data } from "./hsk1/lesson13/text2";
import { lesson13Text3Data } from "./hsk1/lesson13/text3";

// Lesson 14
import { lesson14Text1Data } from "./hsk1/lesson14/text1";
import { lesson14Text2Data } from "./hsk1/lesson14/text2";
import { lesson14Text3Data } from "./hsk1/lesson14/text3";

// Lesson 15
import { lesson15Text1Data } from "./hsk1/lesson15/text1";
import { lesson15Text2Data } from "./hsk1/lesson15/text2";
import { lesson15Text3Data } from "./hsk1/lesson15/text3";

// ============ HSK 2 IMPORTS ============
// Lesson 1
import { hsk2lesson1text1 } from "./hsk2/lesson1/text1";
import { hsk2lesson1text2 } from "./hsk2/lesson1/text2";
import { hsk2lesson1text3 } from "./hsk2/lesson1/text3";
import { hsk2lesson1text4 } from "./hsk2/lesson1/text4";

// Lesson 2
import { hsk2lesson2text1 } from "./hsk2/lesson2/text1";
import { hsk2lesson2text2 } from "./hsk2/lesson2/text2";
import { hsk2lesson2text3 } from "./hsk2/lesson2/text3";
import { hsk2lesson2text4 } from "./hsk2/lesson2/text4";

// Lesson 3
import { hsk2lesson3text1 } from "./hsk2/lesson3/text1";
import { hsk2lesson3text2 } from "./hsk2/lesson3/text2";
import { hsk2lesson3text3 } from "./hsk2/lesson3/text3";
import { hsk2lesson3text4 } from "./hsk2/lesson3/text4";

// Lesson 4
import { hsk2lesson4text1 } from "./hsk2/lesson4/text1";
import { hsk2lesson4text2 } from "./hsk2/lesson4/text2";
import { hsk2lesson4text3 } from "./hsk2/lesson4/text3";
import { hsk2lesson4text4 } from "./hsk2/lesson4/text4";

// Lesson 5
import { hsk2lesson5text1 } from "./hsk2/lesson5/text1";
import { hsk2lesson5text2 } from "./hsk2/lesson5/text2";
import { hsk2lesson5text3 } from "./hsk2/lesson5/text3";
import { hsk2lesson5text4 } from "./hsk2/lesson5/text4";

// Lesson 6
import { hsk2lesson6text1 } from "./hsk2/lesson6/text1";
import { hsk2lesson6text2 } from "./hsk2/lesson6/text2";
import { hsk2lesson6text3 } from "./hsk2/lesson6/text3";
import { hsk2lesson6text4 } from "./hsk2/lesson6/text4";

// Lesson 7
import { hsk2lesson7text1 } from "./hsk2/lesson7/text1";
import { hsk2lesson7text2 } from "./hsk2/lesson7/text2";
import { hsk2lesson7text3 } from "./hsk2/lesson7/text3";
import { hsk2lesson7text4 } from "./hsk2/lesson7/text4";

// Lesson 8
import { hsk2lesson8text1 } from "./hsk2/lesson8/text1";
import { hsk2lesson8text2 } from "./hsk2/lesson8/text2";
import { hsk2lesson8text3 } from "./hsk2/lesson8/text3";
import { hsk2lesson8text4 } from "./hsk2/lesson8/text4";

// Lesson 9
import { hsk2lesson9text1 } from "./hsk2/lesson9/text1";
import { hsk2lesson9text2 } from "./hsk2/lesson9/text2";
import { hsk2lesson9text3 } from "./hsk2/lesson9/text3";
import { hsk2lesson9text4 } from "./hsk2/lesson9/text4";

// Lesson 10
import { hsk2lesson10text1 } from "./hsk2/lesson10/text1";
import { hsk2lesson10text2 } from "./hsk2/lesson10/text2";
import { hsk2lesson10text3 } from "./hsk2/lesson10/text3";
import { hsk2lesson10text4 } from "./hsk2/lesson10/text4";

// Lesson 11
import { hsk2lesson11text1 } from "./hsk2/lesson11/text1";
import { hsk2lesson11text2 } from "./hsk2/lesson11/text2";
import { hsk2lesson11text3 } from "./hsk2/lesson11/text3";
import { hsk2lesson11text4 } from "./hsk2/lesson11/text4";

// Lesson 12
import { hsk2lesson12text1 } from "./hsk2/lesson12/text1";
import { hsk2lesson12text2 } from "./hsk2/lesson12/text2";
import { hsk2lesson12text3 } from "./hsk2/lesson12/text3";
import { hsk2lesson12text4 } from "./hsk2/lesson12/text4";

// Lesson 13
import { hsk2lesson13text1 } from "./hsk2/lesson13/text1";
import { hsk2lesson13text2 } from "./hsk2/lesson13/text2";
import { hsk2lesson13text3 } from "./hsk2/lesson13/text3";
import { hsk2lesson13text4 } from "./hsk2/lesson13/text4";

// Lesson 14
import { hsk2lesson14text1 } from "./hsk2/lesson14/text1";
import { hsk2lesson14text2 } from "./hsk2/lesson14/text2";
import { hsk2lesson14text3 } from "./hsk2/lesson14/text3";
import { hsk2lesson14text4 } from "./hsk2/lesson14/text4";

// Lesson 15
import { hsk2lesson15text1 } from "./hsk2/lesson15/text1";
import { hsk2lesson15text2 } from "./hsk2/lesson15/text2";
import { hsk2lesson15text3 } from "./hsk2/lesson15/text3";
import { hsk2lesson15text4 } from "./hsk2/lesson15/text4";

// ============ DATA MAP ============
export const vocabularyDataMap: VocabularyDataMap = {
  // ============ HSK 1 ============
  // Lesson 1
  "1-1": lesson1Text1Data,
  "1-2": lesson1Text2Data,
  "1-3": lesson1Text3Data,

  // Lesson 2
  "2-1": lesson2Text1Data,
  "2-2": lesson2Text2Data,
  "2-3": lesson2Text3Data,

  // Lesson 3
  "3-1": lesson3Text1Data,
  "3-2": lesson3Text2Data,
  "3-3": lesson3Text3Data,

  // Lesson 4
  "4-1": lesson4Text1Data,
  "4-2": lesson4Text2Data,
  "4-3": lesson4Text3Data,

  // Lesson 5
  "5-1": lesson5Text1Data,
  "5-2": lesson5Text2Data,
  "5-3": lesson5Text3Data,

  // Lesson 6
  "6-1": lesson6Text1Data,
  "6-2": lesson6Text2Data,
  "6-3": lesson6Text3Data,

  // Lesson 7
  "7-1": lesson7Text1Data,
  "7-2": lesson7Text2Data,
  "7-3": lesson7Text3Data,

  // Lesson 8
  "8-1": lesson8Text1Data,
  "8-2": lesson8Text2Data,
  "8-3": lesson8Text3Data,

  // Lesson 9
  "9-1": lesson9Text1Data,
  "9-2": lesson9Text2Data,
  "9-3": lesson9Text3Data,

  // Lesson 10
  "10-1": lesson10Text1Data,
  "10-2": lesson10Text2Data,
  "10-3": lesson10Text3Data,

  // Lesson 11
  "11-1": lesson11Text1Data,
  "11-2": lesson11Text2Data,
  "11-3": lesson11Text3Data,

  // Lesson 12
  "12-1": lesson12Text1Data,
  "12-2": lesson12Text2Data,
  "12-3": lesson12Text3Data,

  // Lesson 13
  "13-1": lesson13Text1Data,
  "13-2": lesson13Text2Data,
  "13-3": lesson13Text3Data,

  // Lesson 14
  "14-1": lesson14Text1Data,
  "14-2": lesson14Text2Data,
  "14-3": lesson14Text3Data,

  // Lesson 15
  "15-1": lesson15Text1Data,
  "15-2": lesson15Text2Data,
  "15-3": lesson15Text3Data,

  // ============ HSK 2 ============
  // Lesson 1
  "1-1-1": hsk2lesson1text1,
  "1-1-2": hsk2lesson1text2,
  "1-1-3": hsk2lesson1text3,
  "1-1-4": hsk2lesson1text4,

  // Lesson 2
  "1-2-1": hsk2lesson2text1,
  "1-2-2": hsk2lesson2text2,
  "1-2-3": hsk2lesson2text3,
  "1-2-4": hsk2lesson2text4,

  // Lesson 3
  "1-3-1": hsk2lesson3text1,
  "1-3-2": hsk2lesson3text2,
  "1-3-3": hsk2lesson3text3,
  "1-3-4": hsk2lesson3text4,

  // Lesson 4
  "1-4-1": hsk2lesson4text1,
  "1-4-2": hsk2lesson4text2,
  "1-4-3": hsk2lesson4text3,
  "1-4-4": hsk2lesson4text4,

  // Lesson 5
  "1-5-1": hsk2lesson5text1,
  "1-5-2": hsk2lesson5text2,
  "1-5-3": hsk2lesson5text3,
  "1-5-4": hsk2lesson5text4,

  // Lesson 6
  "1-6-1": hsk2lesson6text1,
  "1-6-2": hsk2lesson6text2,
  "1-6-3": hsk2lesson6text3,
  "1-6-4": hsk2lesson6text4,

  // Lesson 7
  "1-7-1": hsk2lesson7text1,
  "1-7-2": hsk2lesson7text2,
  "1-7-3": hsk2lesson7text3,
  "1-7-4": hsk2lesson7text4,

  // Lesson 8
  "1-8-1": hsk2lesson8text1,
  "1-8-2": hsk2lesson8text2,
  "1-8-3": hsk2lesson8text3,
  "1-8-4": hsk2lesson8text4,

  // Lesson 9
  "1-9-1": hsk2lesson9text1,
  "1-9-2": hsk2lesson9text2,
  "1-9-3": hsk2lesson9text3,
  "1-9-4": hsk2lesson9text4,

  // Lesson 10
  "1-10-1": hsk2lesson10text1,
  "1-10-2": hsk2lesson10text2,
  "1-10-3": hsk2lesson10text3,
  "1-10-4": hsk2lesson10text4,

  // Lesson 11
  "1-11-1": hsk2lesson11text1,
  "1-11-2": hsk2lesson11text2,
  "1-11-3": hsk2lesson11text3,
  "1-11-4": hsk2lesson11text4,

  // Lesson 12
  "1-12-1": hsk2lesson12text1,
  "1-12-2": hsk2lesson12text2,
  "1-12-3": hsk2lesson12text3,
  "1-12-4": hsk2lesson12text4,

  // Lesson 13
  "1-13-1": hsk2lesson13text1,
  "1-13-2": hsk2lesson13text2,
  "1-13-3": hsk2lesson13text3,
  "1-13-4": hsk2lesson13text4,

  // Lesson 14
  "1-14-1": hsk2lesson14text1,
  "1-14-2": hsk2lesson14text2,
  "1-14-3": hsk2lesson14text3,
  "1-14-4": hsk2lesson14text4,

  // Lesson 15
  "1-15-1": hsk2lesson15text1,
  "1-15-2": hsk2lesson15text2,
  "1-15-3": hsk2lesson15text3,
  "1-15-4": hsk2lesson15text4,
};

// ============= HELPER FUNCTIONS =============

// Get all unique HSK levels
export function getAllLevels(): number[] {
  const levels = new Set<number>();
  Object.values(vocabularyDataMap).forEach((data) => {
    levels.add(data.hskLevel || data.lesson);
  });
  return Array.from(levels).sort((a, b) => a - b);
}

// Get all texts for a specific HSK level
export function getTextsForLevel(hskLevel: number): number[] {
  const texts = new Set<number>();
  Object.values(vocabularyDataMap).forEach((data) => {
    const level = data.hskLevel || data.lesson;
    if (level === hskLevel) {
      texts.add(data.text);
    }
  });
  return Array.from(texts).sort((a, b) => a - b);
}

// Get data for a specific lesson and text
export function getLessonTextData(
  level: number,
  lesson: number,
  text: number,
): VocabularyData | undefined {
  // Search through all entries
  for (const [key, data] of Object.entries(vocabularyDataMap)) {
    const hskLevel = data.hskLevel || data.lesson;
    if (hskLevel === level && data.lesson === lesson && data.text === text) {
      return data;
    }
  }
  return undefined;
}

// Get all lesson numbers for a specific HSK level
export function getLessonsForLevel(hskLevel: number): number[] {
  const lessons = new Set<number>();
  Object.values(vocabularyDataMap).forEach((data) => {
    const level = data.hskLevel || data.lesson;
    if (level === hskLevel) {
      lessons.add(data.lesson);
    }
  });
  return Array.from(lessons).sort((a, b) => a - b);
}

// Get all texts for a specific lesson
export function getTextsForLesson(hskLevel: number, lesson: number): number[] {
  const texts = new Set<number>();
  Object.values(vocabularyDataMap).forEach((data) => {
    const level = data.hskLevel || data.lesson;
    if (level === hskLevel && data.lesson === lesson) {
      texts.add(data.text);
    }
  });
  return Array.from(texts).sort((a, b) => a - b);
}

// Get lesson data with texts for a specific HSK level
export function getLevelLessonData(hskLevel: number): {
  lesson: number;
  texts: number[];
  totalVocabulary: number;
}[] {
  const lessonMap = new Map<
    number,
    { texts: Set<number>; vocabularyCount: number }
  >();

  Object.values(vocabularyDataMap).forEach((data) => {
    const level = data.hskLevel || data.lesson;
    if (level === hskLevel) {
      const lesson = data.lesson;
      if (!lessonMap.has(lesson)) {
        lessonMap.set(lesson, {
          texts: new Set<number>(),
          vocabularyCount: 0,
        });
      }
      const lessonData = lessonMap.get(lesson)!;
      lessonData.texts.add(data.text);
      lessonData.vocabularyCount += data.vocabulary.length;
    }
  });

  return Array.from(lessonMap.entries())
    .map(([lesson, data]) => ({
      lesson,
      texts: Array.from(data.texts).sort((a, b) => a - b),
      totalVocabulary: data.vocabularyCount,
    }))
    .sort((a, b) => a.lesson - b.lesson);
}

// Get all vocabulary data as array
export function getAllVocabularyData(): VocabularyData[] {
  return Object.values(vocabularyDataMap);
}

// Get level information
export function getLevelInfo(): LevelInfo[] {
  const levelMap = new Map<number, number[]>();

  Object.values(vocabularyDataMap).forEach((data) => {
    const level = data.hskLevel || data.lesson;
    const texts = levelMap.get(level) || [];
    texts.push(data.text);
    levelMap.set(level, texts);
  });

  return Array.from(levelMap.entries())
    .map(([level, texts]) => ({
      level,
      texts: texts.sort((a, b) => a - b),
    }))
    .sort((a, b) => a.level - b.level);
}

// Get next and previous navigation info
export function getNavigationInfo(
  level: number,
  text: number,
): {
  prevText: LevelTextKey | null;
  nextText: LevelTextKey | null;
  currentLevel: number;
  currentText: number;
} {
  const allData = Object.entries(vocabularyDataMap).sort(([keyA], [keyB]) => {
    const partsA = keyA.split("-").map(Number);
    const partsB = keyB.split("-").map(Number);
    const levelA = partsA[0];
    const levelB = partsB[0];
    if (levelA !== levelB) return levelA - levelB;
    return partsA[partsA.length - 1] - partsB[partsB.length - 1];
  });

  const currentKey = `${level}-${text}` as LevelTextKey;
  const currentIndex = allData.findIndex(([key]) => key === currentKey);

  if (currentIndex === -1) {
    return {
      prevText: null,
      nextText: null,
      currentLevel: level,
      currentText: text,
    };
  }

  const prevKey =
    currentIndex > 0 ? (allData[currentIndex - 1][0] as LevelTextKey) : null;
  const nextKey =
    currentIndex < allData.length - 1
      ? (allData[currentIndex + 1][0] as LevelTextKey)
      : null;

  return {
    prevText: prevKey,
    nextText: nextKey,
    currentLevel: level,
    currentText: text,
  };
}

// Get navigation info within the same level only
export function getLevelNavigationInfo(
  hskLevel: number,
  text: number,
): {
  prevText: number | null;
  nextText: number | null;
  totalTexts: number;
  currentIndex: number;
} {
  const texts = getTextsForLevel(hskLevel);
  const currentIndex = texts.indexOf(text);

  if (currentIndex === -1) {
    return {
      prevText: null,
      nextText: null,
      totalTexts: texts.length,
      currentIndex: -1,
    };
  }

  return {
    prevText: currentIndex > 0 ? texts[currentIndex - 1] : null,
    nextText: currentIndex < texts.length - 1 ? texts[currentIndex + 1] : null,
    totalTexts: texts.length,
    currentIndex: currentIndex,
  };
}

// Check if a level-text combination exists
export function isValidLevelText(level: number, text: number): boolean {
  const key = `${level}-${text}` as LevelTextKey;
  return key in vocabularyDataMap;
}

// Get total count of vocabulary items in a level
export function getVocabularyCountForLevel(hskLevel: number): number {
  let total = 0;
  Object.values(vocabularyDataMap).forEach((data) => {
    const level = data.hskLevel || data.lesson;
    if (level === hskLevel) {
      total += data.vocabulary.length;
    }
  });
  return total;
}

// Get all text keys for a level
export function getTextKeysForLevel(hskLevel: number): string[] {
  return getTextsForLevel(hskLevel).map((text) => `${hskLevel}-${text}`);
}

// Get total number of lessons for a specific HSK level
export function getTotalLessonsForLevel(hskLevel: number): number {
  return getLessonsForLevel(hskLevel).length;
}

// Get all lessons data for a specific HSK level with details
export function getDetailedLevelData(hskLevel: number): {
  level: number;
  lessons: {
    lesson: number;
    texts: number[];
    vocabulary: VocabularyData[];
  }[];
  totalVocabulary: number;
  totalTexts: number;
} {
  const lessons = getLevelLessonData(hskLevel);
  let totalVocabulary = 0;
  let totalTexts = 0;

  const detailedLessons = lessons.map((lessonData) => {
    const vocabularyData = lessonData.texts
      .map((text) => getLessonTextData(hskLevel, lessonData.lesson, text))
      .filter((data): data is VocabularyData => data !== undefined);

    totalVocabulary += lessonData.totalVocabulary;
    totalTexts += lessonData.texts.length;

    return {
      lesson: lessonData.lesson,
      texts: lessonData.texts,
      vocabulary: vocabularyData,
    };
  });

  return {
    level: hskLevel,
    lessons: detailedLessons,
    totalVocabulary,
    totalTexts,
  };
}

// Search vocabulary across all levels
export function searchVocabulary(searchTerm: string): {
  level: number;
  lesson: number;
  text: number;
  items: VocabularyData["vocabulary"];
}[] {
  const results: {
    level: number;
    lesson: number;
    text: number;
    items: VocabularyData["vocabulary"];
  }[] = [];

  const term = searchTerm.toLowerCase();

  Object.values(vocabularyDataMap).forEach((data) => {
    const matchingItems = data.vocabulary.filter(
      (item) =>
        item.hanzi.includes(term) ||
        item.pinyin.toLowerCase().includes(term) ||
        item.english.toLowerCase().includes(term) ||
        item.bangla.includes(term),
    );

    if (matchingItems.length > 0) {
      const level = data.hskLevel || data.lesson;
      results.push({
        level,
        lesson: data.lesson,
        text: data.text,
        items: matchingItems,
      });
    }
  });

  return results;
}

// Get statistics for all levels
export function getVocabularyStats(): {
  totalLevels: number;
  totalLessons: number;
  totalTexts: number;
  totalVocabulary: number;
  levelStats: {
    level: number;
    lessons: number;
    texts: number;
    vocabulary: number;
  }[];
} {
  const levels = getAllLevels();
  let totalLessons = 0;
  let totalTexts = 0;
  let totalVocabulary = 0;

  const levelStats = levels.map((level) => {
    const lessons = getLessonsForLevel(level);
    const texts = getTextsForLevel(level);
    const vocabulary = getVocabularyCountForLevel(level);

    totalLessons += lessons.length;
    totalTexts += texts.length;
    totalVocabulary += vocabulary;

    return {
      level,
      lessons: lessons.length,
      texts: texts.length,
      vocabulary,
    };
  });

  return {
    totalLevels: levels.length,
    totalLessons,
    totalTexts,
    totalVocabulary,
    levelStats,
  };
}

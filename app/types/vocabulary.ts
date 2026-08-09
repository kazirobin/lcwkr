// app/types/vocabulary.ts

export interface Character {
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export interface SimilarWord {
  hanzi: string;
  pinyin: string;
  english: string;
}

export interface Example {
  hanzi: string;
  pinyin: string;
  english: string;
  bangla: string;
}

export interface VocabularyItem {
  hanzi: string;
  pinyin: string;
  english: string;
  bangla: string;
  characters: Character[];
  example: Example;
  similar: SimilarWord[];
}

// ✅ ডায়ালগের জন্য টাইপ
export interface DialogueLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  english: string;
}

export interface Dialogue {
  title: string;
  lines: DialogueLine[];
}

// ✅ VocabularyData তে dialogue যোগ করুন
export interface VocabularyData {
  lesson: number;
  text: number;
  dialogue?: Dialogue;  // ✅ dialogue যোগ করা হলো (optional)
  vocabulary: VocabularyItem[];
}
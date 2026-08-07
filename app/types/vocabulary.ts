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

export interface VocabularyData {
  lesson: number;
  text: number;
  vocabulary: VocabularyItem[];
}
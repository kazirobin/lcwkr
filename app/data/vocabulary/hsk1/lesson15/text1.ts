// Lesson 15 - Text 1
import type { VocabularyData } from "@/app/types/vocabulary";

export const lesson15Text1Data: VocabularyData = {
  lesson: 15,
  text: 1,
  vocabulary: [
    {
      hanzi: "爱",
      pinyin: "ài",
      english: "Like / Love",
      bangla: "পছন্দ করা/ভালোবাসা",
      characters: [
        {
          hanzi: "爫",
          pinyin: "zhǎo",
          meaning: "Claw"
        },
        {
          hanzi: "冖",
          pinyin: "mì",
          meaning: "Cover"
        },
        {
          hanzi: "友",
          pinyin: "yǒu",
          meaning: "Friend"
        }
      ],
      example: {
        hanzi: "我爱吃中国菜。",
        pinyin: "Wǒ ài chī Zhōngguó cài.",
        english: "I love eating Chinese food.",
        bangla: "আমি চাইনিজ খাবার খেতে ভালোবাসি।"
      },
      similar: [
        {
          hanzi: "喜欢",
          pinyin: "xǐhuān",
          english: "Like"
        }
      ]
    },
    {
      hanzi: "哪个",
      pinyin: "nǎge",
      english: "Which one",
      bangla: "কোনটি",
      characters: [
        {
          hanzi: "哪",
          pinyin: "nǎ",
          meaning: "Which"
        },
        {
          hanzi: "个",
          pinyin: "ge",
          meaning: "Measure word"
        }
      ],
      example: {
        hanzi: "你喜欢哪个？",
        pinyin: "Nǐ xǐhuān nǎge?",
        english: "Which one do you like?",
        bangla: "তুমি কোনটি পছন্দ কর?"
      },
      similar: [
        {
          hanzi: "哪",
          pinyin: "nǎ",
          english: "Which"
        }
      ]
    }
  ]
};
// app/data/vocabulary/lesson15-text1.ts
import { VocabularyData } from '@/app/types/vocabulary';

export const hsk2lesson15text1: VocabularyData = {
  hskLevel: 2,
  lesson: 15,
  text: 1,
  dialogue: {
    title: "After the Exam",
    lines: [
      {
        speaker: "Wang Yifei",
        hanzi: "考试就要开始了，请大家写上姓名，写好后就可以做题了。",
        pinyin: "Kǎoshì jiù yào kāishǐ le, qǐng dàjiā xiě shàng xìngmíng. Xiěhǎo hòu jiù kěyǐ zuò tí le.",
        english: "The exam is about to begin. Please write your name. After you finish writing it, you can start doing the questions.",
      },
      {
        speaker: "Bai Jiayue",
        hanzi: "老师，我做完了。",
        pinyin: "Lǎoshī, wǒ zuòwán le.",
        english: "Teacher, I'm finished.",
      },
      {
        speaker: "Chen Tianzhong",
        hanzi: "老师，我也做完了。",
        pinyin: "Lǎoshī, wǒ yě zuòwán le.",
        english: "Teacher, I'm finished too.",
      },
      {
        speaker: "Wang Yifei",
        hanzi: "……对了，你们考完试想做什么？",
        pinyin: "……Duìle, nǐmen kǎowán shì xiǎng zuò shénme?",
        english: "Oh, right. What do you want to do after the exam?",
      },
      {
        speaker: "Bai Jiayue",
        hanzi: "我很想去中国，虽然去过一次，但是很想再去一次。",
        pinyin: "Wǒ hěn xiǎng qù Zhōngguó, suīrán qùguo yí cì, dànshì hěn xiǎng zài qù yí cì.",
        english: "I really want to go to China. Although I have been there once, I really want to go again.",
      },
      {
        speaker: "Wang Yifei",
        hanzi: "不错，到中国后你就可以经常说中文了。",
        pinyin: "Búcuò, dào Zhōngguó hòu nǐ jiù kěyǐ jīngcháng shuō Zhōngwén le.",
        english: "That's great. After you go to China, you can speak Chinese often.",
      },
    ],
  },
  vocabulary: [
    {
      hanzi: "姓名",
      pinyin: "xìngmíng",
      english: "Full name",
      bangla: "পূর্ণ নাম",
      characters: [
        { hanzi: "姓", pinyin: "xìng", meaning: "Surname" },
        { hanzi: "名", pinyin: "míng", meaning: "Given name" },
      ],
      example: {
        hanzi: "请在这里写下您的姓名。",
        pinyin: "Qǐng zài zhèlǐ xiěxià nín de xìngmíng.",
        english: "Please write down your name here.",
        bangla: "অনুগ্রহ করে এখানে আপনার পূর্ণ নাম লিখুন।",
      },
      similar: [
        { hanzi: "名字", pinyin: "míngzi", english: "Name" },
      ],
    },
  ],
};// app/data/vocabulary/lesson1-text1.ts
import { VocabularyData } from '@/app/types/vocabulary';

export const hsk2lesson1text1: VocabularyData = {
  hskLevel: 2,
  lesson: 1,
  text: 1,
  dialogue: {
    title: "First Meeting",
    lines: [
      {
        speaker: "A",
        hanzi: "你好！",
        pinyin: "Nǐ hǎo!",
        english: "Hello!",
      },
      {
        speaker: "B",
        hanzi: "你好！",
        pinyin: "Nǐ hǎo!",
        english: "Hello!",
      },
      {
        speaker: "A",
        hanzi: "我叫小明。",
        pinyin: "Wǒ jiào Xiǎo Míng.",
        english: "My name is Xiao Ming.",
      },
    ],
  },
  vocabulary: [
    {
      hanzi: "你",
      pinyin: "nǐ",
      english: "You",
      bangla: "তুমি",
      characters: [
        { hanzi: "你", pinyin: "nǐ", meaning: "You" },
      ],
      example: {
        hanzi: "你好！",
        pinyin: "Nǐ hǎo!",
        english: "Hello!",
        bangla: "হ্যালো!",
      },
      similar: [
        { hanzi: "您", pinyin: "nín", english: "You (polite)" },
      ],
    },
    {
      hanzi: "好",
      pinyin: "hǎo",
      english: "Good",
      bangla: "ভালো",
      characters: [
        { hanzi: "女", pinyin: "nǚ", meaning: "Woman" },
        { hanzi: "子", pinyin: "zǐ", meaning: "Child" },
      ],
      example: {
        hanzi: "很好。",
        pinyin: "Hěn hǎo.",
        english: "Very good.",
        bangla: "খুব ভালো।",
      },
      similar: [
        { hanzi: "棒", pinyin: "bàng", english: "Great/Awesome" },
      ],
    },
    {
      hanzi: "叫",
      pinyin: "jiào",
      english: "To be called",
      bangla: "ডাকা হয়",
      characters: [
        { hanzi: "叫", pinyin: "jiào", meaning: "Call/Name" },
      ],
      example: {
        hanzi: "我叫小明。",
        pinyin: "Wǒ jiào Xiǎo Míng.",
        english: "My name is Xiao Ming.",
        bangla: "আমার নাম জিয়াও মিং।",
      },
      similar: [
        { hanzi: "名字", pinyin: "míngzi", english: "Name" },
      ],
    },
  ],
};
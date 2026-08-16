// data/communityRules.ts

export interface Rule {
  id: number;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  tagBn: string;
  tagEn: string;
}

export const rulesData: Rule[] = [
  {
    id: 1,
    titleBn: "সম্পূর্ণ ফ্রি — কোনো পেইড সিস্টেম নেই",
    titleEn: "100% Free Forever — No Paid System",
    descBn: "আমাদের সকল ক্লাস ও স্টাডি ম্যাটেরিয়াল সম্পূর্ণ ফ্রি এবং আজীবন ফ্রি থাকবে। কোনো প্রকার আর্থিক লেনদেন বা পেইড কোর্স নেই।",
    descEn: "All our classes and study materials are 100% free and will always remain free. We do not have any paid system or hidden charges.",
    tagBn: "সম্পূর্ণ ফ্রি",
    tagEn: "100% Free",
  },
  {
    id: 2,
    titleBn: "পারস্পরিক সম্মান বজায় রাখুন",
    titleEn: "Maintain Mutual Respect",
    descBn: "কমিউনিটির সকল সদস্য এবং ইন্সট্রাক্টরের প্রতি শ্রদ্ধাশীল আচরণ করুন। কোনো প্রকার কটূক্তি গ্রহণযোগ্য নয়।",
    descEn: "Treat all members and instructors with respect. Any form of offensive behavior or harassment is strictly prohibited.",
    tagBn: "আচরণবিধি",
    tagEn: "Code of Conduct",
  },
  {
    id: 3,
    titleBn: "শুধুমাত্র চাইনিজ শিক্ষা সম্পর্কিত আলোচনা",
    titleEn: "Chinese Learning Only",
    descBn: "গ্রুপে অপ্রাসঙ্গিক লিংক, রাজনৈতিক বা ব্যক্তিগত প্রচারণামূলক কোনো বার্তা পাঠানো সম্পূর্ণ নিষিদ্ধ।",
    descEn: "Sharing irrelevant links, political, or promotional messages is strictly prohibited in the community.",
    tagBn: "কন্টেন্ট",
    tagEn: "Content",
  },
  {
    id: 4,
    titleBn: "নিয়মিত হোমওয়ার্ক ও অডিও জমা দিন",
    titleEn: "Submit Homework & Audio Regularly",
    descBn: "প্রতিদিনের পড়া ও পিনয়িন উচ্চারণের অডিও নির্ধারিত সময়ের মধ্যে গ্রুপে শেয়ার করে ফিডব্যাক নিন।",
    descEn: "Share your daily lessons and Pinyin pronunciation voice recordings on time to receive instructor feedback.",
    tagBn: "প্র্যাকটিস",
    tagEn: "Practice",
  },
  {
    id: 5,
    titleBn: "ক্লাসের সময় শৃঙ্খলা বজায় রাখুন",
    titleEn: "Maintain Class Discipline",
    descBn: "লাইভ ক্লাসে অহেতুক মাইক্রোফোন অন রাখবেন না। প্রশ্ন করার জন্য হ্যান্ড রেইজ করুন।",
    descEn: "Keep your microphone muted during live sessions. Use the raise hand feature when you have questions.",
    tagBn: "লাইভ ক্লাস",
    tagEn: "Live Class",
  },
  {
    id: 6,
    titleBn: "কমিউনিটির গোপনীয়তা রক্ষা করুন",
    titleEn: "Protect Member Privacy",
    descBn: "অন্য কোনো সদস্যের অনুমতি ছাড়া ইনবক্সে ব্যক্তিগত বার্তা পাঠানো থেকে বিরত থাকুন।",
    descEn: "Do not send unsolicited private messages to other members without their explicit permission.",
    tagBn: "প্রাইভেসি",
    tagEn: "Privacy",
  },
  {
    id: 7,
    titleBn: "ভুল ধরিয়ে দিতে ইতিবাচক হোন",
    titleEn: "Be Constructive & Helpful",
    descBn: "কেউ উচ্চারণ বা লেখায় ভুল করলে তাকে সম্মানজনক ও গঠনমূলকভাবে সাহায্য করুন।",
    descEn: "If someone makes a mistake in pronunciation or writing, assist them constructively and politely.",
    tagBn: "সহযোগিতা",
    tagEn: "Support",
  },
];
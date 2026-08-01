import Link from "next/link";
import {
  Smartphone,
  BookOpen,
  Languages,
  Pencil,
  Download,
  ExternalLink,
} from "lucide-react";

const apps = [
  {
    name: "Hanping Chinese Dictionary",
    category: "Dictionary",
    url: "https://play.google.com/store/apps/details?id=com.embermitre.hanping.app.pro",
  },
  {
    name: "Pleco Chinese Dictionary",
    category: "Dictionary",
    url: "https://play.google.com/store/apps/details?id=com.embermitre.hanping.app.pro",
  },
  {
    name: "HelloTalk",
    category: "Language Exchange",
    url: "https://play.google.com/store/apps/details?id=com.hellotalk",
  },
  {
    name: "Rednote",
    category: "Social",
    url: "https://play.google.com/store/apps/details?id=com.xingin.xhs",
  },
  {
    name: "WeChat",
    category: "Communication",
    url: "https://play.google.com/store/apps/details?id=com.tencent.mm",
  },
  {
    name: "Pinyin Academy",
    category: "Pinyin",
    url: "https://play.google.com/store/apps/details?id=pest.games.ChinesePinYin",
  },
  {
    name: "Chinese Pinyin",
    category: "Pinyin",
    url: "https://play.google.com/store/apps/details?id=com.xixiantian.chinesepinyin",
  },
  {
    name: "Pinyin Helper",
    category: "Pinyin",
    url: "https://play.google.com/store/apps/details?id=com.patgdut.pinyinhelper",
  },
  {
    name: "ChinesePinyin",
    category: "Pinyin",
    url: "https://play.google.com/store/apps/details?id=com.aobocorp.chinesepinyin",
  },
  {
    name: "Chinese Pinyin Learning Machine",
    category: "Pinyin",
    url: "https://play.google.com/store/apps/details?id=uni.UNI40BB307",
  },
  {
    name: "Chinesimple HSK 1",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=es.hskfree.ap",
  },
  {
    name: "Chinesimple HSK 2",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=es.aroundpixels.hsk2lite",
  },
  {
    name: "Chinesimple HSK 3",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=es.aroundpixels.hsk3lite",
  },
  {
    name: "Chinesimple HSK 4",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=es.aroundpixels.hsk4lite",
  },
  {
    name: "Chinesimple HSK 5",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=es.aroundpixels.hsk5lite",
  },
  {
    name: "Chinesimple HSK 6",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=es.aroundpixels.hsk6",
  },
  {
    name: "Chinese Guru",
    category: "Vocabulary",
    url: "https://play.google.com/store/apps/details?id=com.xamisoft.chineseexpert",
  },
  {
    name: "Chinese Writer",
    category: "Writing",
    url: "https://play.google.com/store/apps/details?id=com.molatra.chinesewriterlite",
  },
  {
    name: "Skritter",
    category: "Writing",
    url: "https://play.google.com/store/apps/details?id=com.inkren.skritter.chinese",
  },
  {
    name: "KaoHan",
    category: "HSK",
    url: "https://play.google.com/store/apps/details?id=com.kaokao.kaohan_learnchinesehsk",
  },
  {
    name: "Chinese Strokes Order",
    category: "Writing",
    url: "https://play.google.com/store/apps/details?id=com.patgdut.chinesestrokesorder",
  },
  {
    name: "Chinese Stroke Dictionary",
    category: "Writing",
    url: "https://play.google.com/store/apps/details?id=com.ansami.hkchinesechar",
  },
  {
    name: "Hanzi Stroke",
    category: "Writing",
    url: "https://play.google.com/store/apps/details?id=com.sparkinc.hanzi_stroke",
  },
];

function getIcon(category: string) {
  switch (category) {
    case "Dictionary":
      return <BookOpen className="w-6 h-6 text-blue-600" />;

    case "Language Exchange":
      return <Languages className="w-6 h-6 text-green-600" />;

    case "Writing":
      return <Pencil className="w-6 h-6 text-purple-600" />;

    default:
      return <Smartphone className="w-6 h-6 text-orange-600" />;
  }
}

export default function SuggestedAppsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold">
            📱 Suggested Chinese Learning Apps
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Install these recommended apps to improve your Chinese listening,
            speaking, reading, writing, pronunciation, and HSK preparation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                {getIcon(app.category)}

                <div>
                  <h2 className="font-semibold text-lg leading-6">
                    {app.name}
                  </h2>

                  <span className="inline-block mt-2 rounded-full bg-blue-100 text-blue-700 text-xs px-3 py-1">
                    {app.category}
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  href={app.url}
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white py-3 font-medium transition"
                >
                  <Download className="w-5 h-5" />
                  Install App
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
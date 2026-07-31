import {
  Globe2,
  CheckCircle2,
} from "lucide-react";

import OverviewCard from "./OverviewCard";

const dialects = [
  {
    title: "Mandarin (普通话)",
    desc: "Official language of China and the most widely spoken.",
  },
  {
    title: "Cantonese (粤语)",
    desc: "Widely spoken in Guangdong, Hong Kong and Macau.",
  },
  {
    title: "Wu (吴语)",
    desc: "Mainly spoken in Shanghai, Jiangsu and Zhejiang.",
  },
  {
    title: "Min (闽南语)",
    desc: "Common in Fujian and Taiwan.",
  },
  {
    title: "Hakka (客家话)",
    desc: "Spoken by Hakka communities across different regions.",
  },
];

export default function Varieties() {
  return (
    <OverviewCard
      title="Varieties"
      icon={<Globe2 size={28} />}
    >
      <p className="mb-6 leading-8 text-gray-700">
        Chinese consists of several regional varieties (dialects).
        Mandarin is the official language, while many others are
        spoken across different provinces and communities.
      </p>

      <div className="space-y-5">

        {dialects.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-1 shrink-0 text-red-600"
            />

            <div>

              <h4 className="font-semibold text-gray-900">
                {item.title}
              </h4>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </OverviewCard>
  );
}
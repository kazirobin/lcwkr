import OverviewCard from "./OverviewCard";
import { Languages, CheckCircle2 } from "lucide-react";

const features = [
  "Logographic writing system",
  "Rich culture and literature",
  "One of the world's most influential languages",
];

export default function WhatIsChinese() {
  return (
    <OverviewCard
      title="What is Chinese?"
      icon={<Languages size={28} />}
    >
      <p className="leading-8 text-gray-700">
        Chinese (中文 – Zhōngwén) refers to the Sinitic languages spoken
        primarily in China and by Chinese communities around the world.
        Mandarin (普通话 – Pǔtōnghuà) is the official language of China and
        the most widely spoken variety.
      </p>

      <div className="my-6 border-t border-gray-100" />

      <div className="space-y-4">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-1 text-red-600"
            />

            <span className="text-gray-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </OverviewCard>
  );
}
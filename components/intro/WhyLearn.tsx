import {
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import OverviewCard from "./OverviewCard";

const reasons = [
  "Connect with over 1.1 billion people",
  "Access better career opportunities",
  "Study in top universities in China",
  "Understand Chinese culture and history",
  "Travel in China with confidence",
];

export default function WhyLearn() {
  return (
    <OverviewCard
      title="Why Learn Chinese?"
      icon={<BookOpen size={28} />}
    >
      <div className="space-y-5">
        {reasons.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-1 text-red-600 shrink-0"
            />

            <p className="text-gray-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </OverviewCard>
  );
}
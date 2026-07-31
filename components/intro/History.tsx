import { Landmark } from "lucide-react";
import OverviewCard from "./OverviewCard";
import Timeline from "./Timeline";

export default function History() {
  return (
    <OverviewCard
      title="History"
      icon={<Landmark size={28} />}
    >
      <p className="mb-8 leading-8 text-gray-700">
        Chinese is one of the world's oldest continuously used languages,
        with a written history spanning more than 3,000 years.
      </p>

      <Timeline />
    </OverviewCard>
  );
}
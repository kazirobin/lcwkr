import {
  Users,
  Globe2,
  Flag,
} from "lucide-react";

import OverviewCard from "./OverviewCard";
import StatBox from "./StatBox";

export default function Speakers() {
  return (
    <OverviewCard
      title="Speakers"
      icon={<Users size={28} />}
    >
      <p className="mb-6 leading-8 text-gray-700">
        Chinese is one of the most widely spoken languages in the world.
      </p>

      <div className="space-y-4">

        <StatBox
          icon={<Users size={24} />}
          value="1.1+ Billion"
          title="Native Speakers"
          subtitle="Mandarin"
        />

        <StatBox
          icon={<Globe2 size={24} />}
          value="1.2+ Billion"
          title="Total Speakers"
          subtitle="Including Second Language"
        />

        <StatBox
          icon={<Flag size={24} />}
          value="100+"
          title="Countries & Regions"
          subtitle="Chinese is used globally"
        />

      </div>
    </OverviewCard>
  );
}
import {
  Globe2,
  Building2,
  GraduationCap,
  Cpu,
} from "lucide-react";

import OverviewCard from "./OverviewCard";

export default function ChineseWorld() {
  return (
    <OverviewCard
      title="Chinese in the World"
      icon={<Globe2 size={28} />}
    >
      <div className="grid gap-8 lg:grid-cols-2">

        <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-10">

          <Globe2
            size={180}
            className="text-red-500 opacity-80"
          />

        </div>

        <div className="space-y-6">

          <div className="flex gap-4">

            <Building2 className="text-red-600 mt-1" />

            <div>
              <h3 className="font-bold">
                United Nations
              </h3>

              <p className="text-gray-600">
                Chinese is one of the six official
                languages of the United Nations.
              </p>
            </div>

          </div>

          <div className="flex gap-4">

            <GraduationCap className="text-red-600 mt-1" />

            <div>

              <h3 className="font-bold">
                Education
              </h3>

              <p className="text-gray-600">
                Chinese is increasingly taught in
                schools and universities worldwide.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <Cpu className="text-red-600 mt-1" />

            <div>

              <h3 className="font-bold">
                Technology & Business
              </h3>

              <p className="text-gray-600">
                Chinese plays an important role in
                global business, technology and trade.
              </p>

            </div>

          </div>

        </div>

      </div>
    </OverviewCard>
  );
}
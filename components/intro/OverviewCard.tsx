import { ReactNode } from "react";

interface OverviewCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function OverviewCard({
  title,
  icon,
  children,
}: OverviewCardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-red-100
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
          {icon}
        </div>

        <div>
          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="mt-2 h-1 w-14 rounded-full bg-red-600" />
        </div>
      </div>

      {children}
    </div>
  );
}
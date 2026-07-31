import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  value: string;
  title: string;
  subtitle?: string;
}

export default function StatBox({
  icon,
  value,
  title,
  subtitle,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-red-100
      bg-gradient-to-r
      from-red-50
      to-white
      p-5
      transition-all
      duration-300
      hover:shadow-lg
    "
    >
      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
          {icon}
        </div>

        <div>

          <h3 className="text-3xl font-bold text-red-600">
            {value}
          </h3>

          <p className="font-semibold text-gray-900">
            {title}
          </p>

          {subtitle && (
            <p className="text-sm text-gray-500">
              {subtitle}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
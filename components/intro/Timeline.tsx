import { Circle } from "lucide-react";

const history = [
  {
    year: "1200 BCE",
    title: "Oracle Bone Script",
    description:
      "Earliest Chinese writing discovered on oracle bones.",
  },
  {
    year: "221 BCE",
    title: "Qin Dynasty",
    description:
      "Chinese characters became standardized.",
  },
  {
    year: "7th Century",
    title: "Tang Dynasty",
    description:
      "Chinese language flourished in literature and culture.",
  },
  {
    year: "Today",
    title: "Modern Chinese",
    description:
      "Chinese continues to evolve across the world.",
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-red-200 ml-3">

      {history.map((item) => (
        <div
          key={item.year}
          className="relative pb-8 pl-8"
        >
          <div className="absolute -left-[9px] top-2">
            <Circle
              size={16}
              className="fill-red-600 text-red-600"
            />
          </div>

          <p className="font-semibold text-red-600">
            {item.year}
          </p>

          <h3 className="mt-1 text-lg font-bold">
            {item.title}
          </h3>

          <p className="mt-1 text-sm leading-7 text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
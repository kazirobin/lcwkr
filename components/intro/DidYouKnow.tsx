import { Lightbulb } from "lucide-react";

export default function DidYouKnow() {
  return (
    <section
      className="
      rounded-3xl
      border
      border-red-100
      bg-gradient-to-r
      from-red-50
      to-orange-50
      p-6
    "
    >
      <div className="flex items-start gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">

          <Lightbulb size={26} />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-red-600">
            Did You Know?
          </h2>

          <p className="mt-3 leading-8 text-gray-700">
            Chinese characters are not an alphabet.
            Each character usually represents a word
            or a meaningful unit, making Chinese one
            of the world's oldest and most fascinating
            writing systems.
          </p>

        </div>

      </div>
    </section>
  );
}
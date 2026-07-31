import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-red-100
      bg-gradient-to-br
      from-white
      via-red-50
      to-white
      p-10
      shadow-sm
    "
    >
      <Quote
        size={55}
        className="text-red-600"
      />

      <blockquote className="mt-8 text-2xl leading-10 font-medium text-gray-800">
        Learning Chinese opens doors to endless opportunities
        and a whole new world.
      </blockquote>

      <p className="mt-8 text-gray-500">
        — Learn Chinese with Kazi Robin
      </p>

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-red-100 blur-3xl opacity-60" />
    </div>
  );
}
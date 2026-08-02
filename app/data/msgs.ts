export type Snippet = {
  id: number;
  title: string;
  description: string;
  language: "tsx" | "ts" | "jsx" | "js" | "css" | "html";
  code: string;
};

export const snippets: Snippet[] = [
  {
    id: 1,
    title: "Gradient Button",
    description: "Simple reusable Tailwind button",
    language: "tsx",
    code: `export default function Button() {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition">
      Click Me
    </button>
  );
}`,
  },

  {
    id: 2,
    title: "Responsive Container",
    description: "Max width container",
    language: "tsx",
    code: `<div className="mx-auto max-w-7xl px-4">
  Content Here
</div>`,
  },

  {
    id: 3,
    title: "Center Div",
    description: "Perfect center using Flex",
    language: "tsx",
    code: `<div className="flex min-h-screen items-center justify-center">
  Center Content
</div>`,
  },
];
import TeamCard from "@/components/TeamCard";
import CodeCard from "../../components/MsgCard";
import { snippets } from "../data/msgs";
import { team } from "../data/team";

export const metadata = {
  title: "Component Library",
  description: "Reusable code snippets",
};

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            🚀 বার্তা স্টোর
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900">
            প্রয়োজনীয় বার্তাটি কপি করুন
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            এখান থেকে আপনার প্রয়োজনীয় বার্তাটি সহজেই 
            <br />
            কপি করে প্রয়োজনে ব্যবহার করতে পারবেন।

         
          </p>

          <div className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 shadow-md">
            <span className="font-semibold text-gray-900">
              {snippets.length} Msg Available
            </span>
          </div>
        </div>
        <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Team Instructions
          </h1>

          <p className="mt-2 text-gray-600">
            Team Members & Responsibilities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              group={member.group}
              tasks={member.tasks}
            />
          ))}
        </div>

      </div>
    </main>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {snippets.map((snippet) => (
            <CodeCard
              key={snippet.id}
              title={snippet.title}
              description={snippet.description}
              language={snippet.language}
              code={snippet.code}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Built with ❤️ using Next.js + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}
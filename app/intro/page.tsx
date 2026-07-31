import Hero from "@/components/intro/Hero";
import WhatIsChinese from "@/components/intro/WhatIsChinese";
import History from "@/components/intro/History";
import Speakers from "@/components/intro/Speakers";
import Varieties from "@/components/intro/Varieties";
import WhyLearn from "@/components/intro/WhyLearn";
import QuoteCard from "@/components/intro/QuoteCard";
import ChineseWorld from "@/components/intro/ChineseWorld";
import DidYouKnow from "@/components/intro/DidYouKnow";

export default function IntroPage() {
  return (
    <main className="bg-[#fffdfb] min-h-screen">
      <div className="container mx-auto max-w-7xl px-5 py-10">

        <Hero />

        <section className="mt-10 grid gap-6 lg:grid-cols-4">
          <WhatIsChinese />
          <History />
          <Speakers />
          <Varieties />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <WhyLearn />
          <QuoteCard />
        </section>

        <section className="mt-6">
          <ChineseWorld />
        </section>

        <section className="mt-6">
          <DidYouKnow />
        </section>

      </div>
    </main>
  );
}
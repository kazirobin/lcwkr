import ClassRoutineSection from "@/components/ClassRoutineSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import { Roadmap } from "@/components/Roadmap";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <Roadmap/>
  <ClassRoutineSection/>
  <FaqSection/>
  </>
  );
}

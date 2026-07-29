import ClassRoutineSection from "@/components/ClassRoutineSection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import { Roadmap } from "@/components/Roadmap";
import Voice from "@/components/Voice";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <Voice/>
  <Roadmap/>
  <ClassRoutineSection/>
  <FaqSection/>
  </>
  );
}

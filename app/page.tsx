import ClassRoutineSection from "@/components/ClassRoutineSection";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import RoadmapBooks from "@/components/RoadmapBooks";
import Voice from "@/components/Voice";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Hero/>
  <Voice/>
  <RoadmapBooks/>
  <ClassRoutineSection/>
  <Faq/>
  </>
  );
}

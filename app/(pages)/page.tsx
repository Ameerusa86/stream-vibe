import Categories from "@/components/Categories";
import Devices from "@/components/Devices";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Devices />
      <FAQ />
      <Pricing />
    </div>
  );
}

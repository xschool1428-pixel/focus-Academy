"use client";

import { SectionHeading } from "./SectionHeading";
import { InfiniteCarousel } from "./InfiniteCarousel";
import { TopperCard } from "./TopperCard";
import { Trophy } from "lucide-react";
import toppersData from "../data/toppers.json";

export function Toppers() {
  return (
    <section id="toppers" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6 mb-12">
        <SectionHeading 
          title="Our Star Toppers" 
          subtitle="Consistent proven results year after year. Join the ranks of our highest achievers."
          accent="cyan"
          icon={Trophy}
        />
      </div>

      <div className="w-full bg-[#0D0D0D] py-16 clip-path-slant relative overflow-hidden">
        {/* Slanted decoration background */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50"></div>

        <InfiniteCarousel direction="right" speed={35} pauseOnHover={true}>
          {toppersData.map((topper) => (
            <TopperCard key={`topper-1-${topper.id}`} topper={topper} />
          ))}
        </InfiniteCarousel>
      </div>


    </section>
  );
}

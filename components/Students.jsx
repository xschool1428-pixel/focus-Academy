"use client";

import { SectionHeading } from "./SectionHeading";
import { InfiniteCarousel } from "./InfiniteCarousel";
import { StudentCard } from "./StudentCard";
import studentsData from "../data/students.json";

export function Students() {
  // Split data into 3 chunks for the rows, or just use slice logic
  const row1 = studentsData.slice(0, 4);
  const row2 = studentsData.slice(4, 8);
  const row3 = [...row1].reverse(); // Using same data just visually different

  return (
    <section id="students" className="py-24 bg-[#0D0D0D] overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <SectionHeading 
          title="Our Happy Students" 
          subtitle="Don't just take our word for it. Hear what our current and past students have to say."
          accent="violet"
        />
      </div>

      <div className="flex flex-col gap-4 py-8 relative">
        {/* Left and right gradient overlays to blend edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

        <InfiniteCarousel direction="left" speed={25}>
          {row1.map((student) => <StudentCard key={student.id} student={student} />)}
        </InfiniteCarousel>
        
        <div className="pl-12">
          <InfiniteCarousel direction="right" speed={35}>
            {row2.map((student) => <StudentCard key={student.id + 'r2'} student={student} />)}
          </InfiniteCarousel>
        </div>
        
        <InfiniteCarousel direction="left" speed={20}>
          {row3.map((student) => <StudentCard key={student.id + 'r3'} student={student} />)}
        </InfiniteCarousel>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "./SectionHeading";
import { InfiniteCarousel } from "./InfiniteCarousel";
import { TeacherCard } from "./TeacherCard";
import teachersData from "../data/teachers.json";

export function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 mb-12">
        <SectionHeading 
          title="Meet Our Teachers" 
          subtitle="Learn from the best educators with years of experience and a passion for teaching."
          accent="violet"
        />
      </div>

      <div className="w-full">
        <InfiniteCarousel direction="left" speed={40} pauseOnHover={true}>
          {teachersData.map((teacher) => (
            <TeacherCard key={`teacher-1-${teacher.id}`} teacher={teacher} />
          ))}
        </InfiniteCarousel>
      </div>


    </section>
  );
}

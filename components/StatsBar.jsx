"use client";

import { AnimatedCounter } from "./AnimatedCounter";

export function StatsBar() {
  const stats = [
    { label: "Students Enrolled", value: 500, suffix: "+" },
    { label: "Expert Teachers", value: 15, suffix: "+" },
    { label: "Result Rate", value: 98, suffix: "%" },
    { label: "Years Experience", value: 10, suffix: "+" },
  ];

  return (
    <div className="w-full bg-[#111] border-y border-[#222]">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#333]">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx === 0 || idx === 2 ? "" : "border-l-0 md:border-l md:border-[#333]"}`}>
              <div className="text-4xl md:text-5xl font-syne font-bold text-cyan mb-2">
                <AnimatedCounter end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

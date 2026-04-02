"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { BookOpen, GraduationCap, Microscope, PenTool } from "lucide-react";
import Link from "next/link";

const coursesData = [
  {
    id: 1,
    icon: BookOpen,
    title: "Class I - V",
    subjects: "All Subjects",
    board: "CBSE | ICSE",
    color: "cyan"
  },
  {
    id: 2,
    icon: PenTool,
    title: "Class VI - X",
    subjects: "Maths, Science, English, SST",
    board: "CBSE | ICSE | JAC",
    color: "amber"
  },
  {
    id: 3,
    icon: Microscope,
    title: "Class XI - XII",
    subjects: "Physics, Chemistry, Maths, Bio",
    board: "Science Stream (All Boards)",
    color: "violet"
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Competitive Exams",
    subjects: "Foundation for JEE & NEET",
    board: "Targeted Prep",
    color: "emerald"
  }
];

export function Courses() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'cyan': return { text: 'text-cyan', border: 'hover:border-cyan', bg: 'group-hover:bg-cyan/10' };
      case 'amber': return { text: 'text-amber-500', border: 'hover:border-amber-500', bg: 'group-hover:bg-amber-500/10' };
      case 'violet': return { text: 'text-violet', border: 'hover:border-violet', bg: 'group-hover:bg-violet/10' };
      case 'emerald': return { text: 'text-emerald-500', border: 'hover:border-emerald-500', bg: 'group-hover:bg-emerald-500/10' };
      default: return { text: 'text-cyan', border: 'hover:border-cyan', bg: 'group-hover:bg-cyan/10' };
    }
  };

  return (
    <section id="courses" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Courses We Offer" 
          subtitle="Comprehensive foundation building and exam preparation tailored to student needs."
          accent="cyan"
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {coursesData.map((course) => {
            const colors = getColorClasses(course.color);
            return (
              <motion.div 
                key={course.id}
                variants={itemVariants}
                className={`bg-[#0D0D0D] border border-[#222] rounded-2xl p-8 flex flex-col items-center text-center group transition-colors duration-300 ${colors.border}`}
              >
                <div className={`p-4 rounded-2xl bg-[#1A1A1A] mb-6 transition-colors duration-300 ${colors.bg}`}>
                  <course.icon size={36} className={colors.text} />
                </div>
                
                <h3 className="text-2xl font-syne font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{course.subjects}</p>
                <div className={`text-xs font-bold px-3 py-1 bg-[#1A1A1A] rounded-full mt-3 mb-8 ${colors.text}`}>
                  {course.board}
                </div>
                
                <Link href="#contact" className="mt-auto text-sm font-medium text-white group-hover:underline decoration-2 underline-offset-4 decoration-transparent transition-all group-hover:decoration-current">
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

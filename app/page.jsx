import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Teachers } from "@/components/Teachers";
import { Toppers } from "@/components/Toppers";
import { Students } from "@/components/Students";
import { Discounts } from "@/components/Discounts";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#0D0D0D]">
        <Hero />
        <StatsBar />
        <About />
        <Teachers />
        <Toppers />
        <Students />
        <Discounts />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

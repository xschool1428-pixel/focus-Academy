import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata = {
  title: "Focus Academy | A Different Approach to Learning",
  description: "Join Focus Academy — Small batches, expert teachers, proven results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-inter overflow-x-hidden antialiased bg-[#0D0D0D]`}>
        {children}
      </body>
    </html>
  );
}

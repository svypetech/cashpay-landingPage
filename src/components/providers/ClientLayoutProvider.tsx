"use client";

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

interface ClientLayoutProviderProps {
  children: React.ReactNode;
}

export default function ClientLayoutProvider({
  children,
}: ClientLayoutProviderProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

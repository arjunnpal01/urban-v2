"use client";


import HeroSection from "./components/Herosection";
import Mostservice from "./card/page";
import Mservice from "./card/mservice/page";
import Pservice from "./card/pservice/page";
import Applianceservice from "./card/ACservices/page";
import CleaningServices from "./card/Cleaner/page";
import Eservices from "./card/Eservice/page";
import PainterServices from "./card/Painter/page";
import Carpenterservice from "./card/CPservice/page";

export default function Home() {
  return (
    
      <main className="min-h-screen">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-6">
            <Mostservice />
            <Mservice />
            <Pservice />
            <Applianceservice />
            <CleaningServices />
            <Eservices />
            <PainterServices />
            <Carpenterservice />
          </div>
        </div>
      </main>
    
  );
}

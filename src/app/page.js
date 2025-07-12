"use client";


import HeroSection from "./components/Herosection";
//  import Mostservice from "./card/page";
 import CleaningServices from "./card/Cleaner/page";
 import Applianceservice from "./card/ACservices/page";
 import SmartLockBanner from "./card/smart doorbeell/page"; 
  // import Mservice from "./card/mservice/page";
import PlumberServices from "./card/plumber/page";
import ElectricianServices from "./card/electrician/page";

import PainterServices from "./card/Painter/page";
import ModularKitchen from "./card/Modular Kitchen/page";
import Carpenterservice from "./card/carpenter/page";

export default function Home() {
  return (
    
      <main className="">
        <HeroSection />
        
          <div className="">
             {/* <Mostservice /> */}
              <CleaningServices />
             <Applianceservice />
             <SmartLockBanner />
           {/* <Mservice /> */}
            <PlumberServices/>
            <ElectricianServices/>
           
            <PainterServices />
            <ModularKitchen />
            <Carpenterservice />
          </div> 
        
      </main>
    
  );
}

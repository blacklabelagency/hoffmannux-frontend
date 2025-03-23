
import Image from "next/image";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Work from "./components/work/Work";
import jsonData from "./json/data.json"
import HomeAnimation from "./components/homeAnimation/HomeAnimation";
import HomeAnimationFigma from "./components/homeAnimation/HomeAnimationFigma";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import HomeAnimationGraphic from "./components/homeAnimation/homeAnimationGraphic";


export default function Home() {

  const workData = jsonData;
  const tagline:string = "DEVELOPMENT + DESIGN";
  const taglineString = tagline.split('').map(letter => `<span>${letter}</span>`).join('');


  return (
    <>
      <div className="min-h-[50vh] w-full flex flex-col homepage py-24">
        <div className="right-side w-full md:w-12/12 flex relative justify-center mb-[-150px]">
          {/* <HomeAnimation /> */ }
          <HomeAnimationGraphic />
          {/*  <img className="home-animation-guide h-auto max-w-[300px] w-[50vw]" src="/homepage-graphics.png" /> */}
        </div>
        <div className="left-side z-10 w-full md:w-12/12 flex flex-col items-center justify-center relative">
            <div className="text-center">
              <div className="mainlogo m-auto w-auto inline-block">
                {/* <img src="/hoffmann-logo-final.png" /> */}
                <h1 className="text-black-200">HOFFMANN STUDIO</h1>
                <h4 dangerouslySetInnerHTML={{ __html: taglineString }} />
                
              </div>
              <div className="mt-6 md:px-[15vw] sm:px-[5vw] introduction-text">
                <p>We help to craft the journey users embark on when engaging with an organization, exploring its offerings, and diving into its products and services.</p>
              </div>
            </div>
        </div>
      </div>
      
      <Services sectionID="SECTION_SERVICES"/>
      <Work sectionID="SECTION_WORK" jsondata={workData} />
      <About sectionID="SECTION_ABOUT" />
      <Contact sectionID="SECTION_CONTACT" />
      <Footer />
    </>
  );
}

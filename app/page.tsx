'use client'
import Image from "next/image";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Work from "./components/work/Work";
import jsonData from "./json/data.json"
import HomeAnimation from "./components/homeAnimation/HomeAnimation";
import HomeAnimationFigma from "./components/homeAnimation/HomeAnimationFigma";
import { useEffect, useState } from "react";


export default function Home() {

  const [currentTab, setCurrentTab] = useState<string|null>(null);
  const [initTabs, setInitTabs] = useState<boolean>(false);

  const workData = jsonData;
  const tagline:string = "DEVELOPMENT + DESIGN";
  const taglineString = tagline.split('').map(letter => `<span>${letter}</span>`).join('');


  useEffect(()=> {

    /*if(initTabs == false){
      let summaryList:NodeListOf<Element> = document.querySelectorAll('summary');
      summaryList.forEach((summary) => {
        summary.addEventListener('click', function(e){
          let summaryDetail = summary.nextSibling as HTMLDetailsElement;
          console.log(summaryDetail);
          if(summaryDetail.open){
            console.log("is open");
          }
          if(summaryDetail.open && summary.id != currentTab){
            console.log("should scroll");
            summary.scrollIntoView();
            setCurrentTab(summary.id);
          };
        });
      });
      setInitTabs(true);
    }*/

    if(initTabs == false){
      let detailsList:NodeListOf<HTMLDetailsElement> = document.querySelectorAll('.page-section details');
      detailsList.forEach((detail)=>{
        detail.addEventListener('toggle', function(e){
          if(detail.open && detail.parentElement?.id != currentTab){
            
            if(detail.parentElement){
              setCurrentTab(detail.parentElement.id);
              detail.parentElement.scrollIntoView({behavior: "smooth"});
            }
          
          }
        });
      });
     setInitTabs(true);
    }


    
    //console.log(currentTab);

  },[]);


  return (
    <>
      <div className="min-h-[50vh] w-full flex flex-col homepage py-24">
        <div className="right-side w-full md:w-12/12 flex relative justify-center pb-8">
          {/* <HomeAnimation /> */ }
           <img className="home-animation-guide h-auto max-w-[300px] w-[50vw]" src="/homepage-graphics.png" /> 
        </div>
        <div className="left-side w-full md:w-12/12 flex flex-col items-center justify-center relative">
            <div className="text-center">
              <div className="mainlogo m-auto w-auto inline-block">
                {/* <img src="/hoffmann-logo-final.png" /> */}
                <h1 className="text-black-200">HOFFMANN STUDIO</h1>
                <h4 dangerouslySetInnerHTML={{ __html: taglineString }} />
                
              </div>
              <div className="mt-6 md:px-[15vw] sm:px-[5vw]">
                <p>We help to craft the journey users embark on when engaging with an organization, exploring its offerings, and diving into its products and services.</p>
              </div>
            </div>
        </div>
      </div>
      
      <Services sectionID="SECTION_SERVICES"/>
      <Work sectionID="SECTION_WORK" jsondata={workData} />
      <About sectionID="SECTION_ABOUT" />
      <Contact sectionID="SECTION_CONTACT" />
    </>
  );
}

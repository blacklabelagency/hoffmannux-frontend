import Image from "next/image";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Work from "./components/work/Work";
import jsonData from "./json/data.json"
import HomeAnimation from "./components/homeAnimation/HomeAnimation";
import HomeAnimationFigma from "./components/homeAnimation/HomeAnimationFigma";


export default function Home() {

  const workData = jsonData;
  const tagline:string = "DEVELOPMENT + DESIGN";
  const taglineString = tagline.split('').map(letter => `<span>${letter}</span>`).join('');

  return (
    <>
      <div className="min-h-screen w-full flex homepage h-[100vh]">
        <div className="left-side w-full md:w-5/12 flex flex-col items-center justify-center relative">
            <div className="text-center">
              <div className="mainlogo m-auto w-auto inline-block">
                <img src="/hoffmann-logo-final.png" />
                <h4 dangerouslySetInnerHTML={{ __html: taglineString }} />
                
              </div>
              <div className="mt-6">
                <p>We help to craft the journey users embark on when engaging with an organization, exploring its offerings, and diving into its products and services.</p>
              </div>
            </div>
        </div>
        <div className="right-side w-full md:w-7/12 flex  relative justify-center pb-2">
          {/* <HomeAnimation /> */ }
           <img className="home-animation-guide" src="/homepage-graphics.png" /> 
        </div>
      </div>
      
      <Services />
      <Work jsondata={workData} />
      <About />
      <Contact />
    </>
  );
}

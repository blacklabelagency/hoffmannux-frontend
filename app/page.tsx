import Image from "next/image";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Work from "./components/work/Work";
import jsonData from "./json/data.json"


export default function Home() {

  const workData = jsonData;

  return (
    <>
      <div className="min-h-screen w-full flex homepage h-[100vh] px-12">
        <div className="left-side w-full md:w-5/12 flex flex-col items-center justify-center relative">
            <div className="text-center">
              <div className="mainlogo m-auto w-auto inline-block">
                <img src="/images/HoffmannUX-Logo.png" />
              </div>
              <div className="mt-6">
                <p>Crafts the journey users embark on when engaging with a company, exploring its offerings, and diving into its products and services.</p>
              </div>
            </div>
        </div>
        <div className="right-side w-full md:w-7/12 flex items-center justify-center pb-2">
          <img src="/homepage-graphics.png" />
        </div>
      </div>
      <Services />
      <Work jsondata={workData} />
      <About />
      <Contact />
    </>
  );
}

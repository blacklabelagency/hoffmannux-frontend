import Image from "next/image";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Work from "./components/work/Work";
import jsonData from "./json/data.json"


export default function Home() {

  const workData = jsonData;
  const tagline:string = "OMNICHANNEL APPLICATIONS FOR THE WEB";
  const taglineString = tagline.split('').map(letter => `<span>${letter}</span>`).join('');

  return (
    <>
      <div className="min-h-screen w-full flex homepage h-[100vh]">
        <div className="left-side w-full md:w-5/12 flex flex-col items-center justify-center relative">
            <div className="text-center">
              <div className="mainlogo m-auto w-auto inline-block">
                <img src="/images/hoffma-logo-large.png" />
                <h4 dangerouslySetInnerHTML={{ __html: taglineString }} />
                
              </div>
              <div className="mt-6">
                <p>We help to craft the journey users embark on when engaging with an organization, exploring its offerings, and diving into its products and services.</p>
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

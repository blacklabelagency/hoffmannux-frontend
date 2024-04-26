'use client'
import {useRef, useEffect, useContext} from 'react';
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import useIsomorphicLayoutEffect from "@/helpers/isomorphicEffect";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

export default function Template({children}:{children:React.ReactNode}){

    const main = useRef<any>();
    const scrollPage = useRef<any>();

    useIsomorphicLayoutEffect(() => {
        //rendering context
        let ctx = gsap.context(() => {
          ScrollTrigger.defaults({
            markers: true
          });
          const timeline = gsap.timeline({
            scrollTrigger: ".gsap_services",
            toggleActions: 'restart reverse resume restart'
          });
    
          //1. SCROLLTRIGGER
          timeline.to(".gsap_section_title", {
            toggleActions: 'restart reverse resume restart',
            duration: .5,
            opacity: 1,
            translateX: "500px"
          });
    
          /*const gsap_red = gsap.timeline({
            scrollTrigger: {
              trigger: ".gsap_red",
              toggleActions: "restart pause reverse pause"
            }
          });
    
          gsap_red.to(".gsap_red", {
            duration: 1,
            backgroundColor: "#FFA500",
            ease: "none"
          })
          .to(".gsap_red p", {
            scale: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2"
          });
    
          const yoyo = gsap.timeline({
            scrollTrigger: ".yoyo"
          });
    
          yoyo.to(".yoyo p", {
            scale: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2"
          });*/
        }, scrollPage); // Scope selector
        return () => ctx.revert(); // cleanup
      }, []);

    return (
        <div ref={scrollPage} className="templateName">{children}</div>
    )
}
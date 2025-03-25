import { useRouter } from "next/router";
import { useRef } from "react";
export default function TransitionLink({href, label, scrollTo}:{href:string, label:string, scrollTo:string}){
    const handleNavClick = () =>{
        console.log(href, label);
        let targetSection = document.getElementById(scrollTo);
        
        if(targetSection)
        targetSection.scrollIntoView(true);
    }
    return (
        <button onClick={handleNavClick}>{label}</button>
    )
}
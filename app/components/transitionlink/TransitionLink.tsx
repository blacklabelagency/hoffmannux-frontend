import { useRouter } from "next/router";
import { useRef } from "react";
export default function TransitionLink({href, label, scrollTo, handleClickFunction}:{href:string, label:string, scrollTo:string, handleClickFunction:any}){
    const handleNavClick = () =>{
        
        let targetSection = document.getElementById(scrollTo);
        
        if(targetSection)
        targetSection.scrollIntoView(true);


        handleClickFunction();
    }
    return (
        <button onClick={handleNavClick}>{label}</button>
    )
}
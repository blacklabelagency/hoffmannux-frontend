import { useRouter } from "next/router";
import { useRef } from "react";
export default function TransitionLink({href, label}:{href:string, label:string}){
    const handleNavClick = () =>{
        console.log(href, label);
    }
    return (
        <button onClick={handleNavClick}>{label}</button>
    )
}
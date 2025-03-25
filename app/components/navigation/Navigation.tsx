'use client';
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";
import TransitionLink from "../transitionlink/TransitionLink";
import { useState } from "react";

export default function Navigation(){

    const [navOn, setNavOn] = useState(false);
    const handleNavClick = () => {
        setNavOn(false);
    }

    return(
        <aside className={`nav-sidebar w-full sm:w-[100%] sm:h-[60px] lg:w-[5%] lg:h-[100vh] h-screen sticky top-0 p-4 ${navOn == true ? "nav-on" : "nav-off"}`}>
            <div className="flex flex-col items-center">
                <button className="text-4xl mb-10" onClick={() => navOn == true ? setNavOn(false) : setNavOn(true) }>
                    {navOn == false ? (
                        <RiMenu5Line />
                    ) : (
                        <RiCloseFill />
                    )}   
                </button>
                <div className="navigation-linkset">
                    <TransitionLink href="#" label="SERVICES" scrollTo="SECTION_SERVICES" handleClickFunction={handleNavClick} />
                    <TransitionLink href="#" label="WORK" scrollTo="SECTION_WORK" handleClickFunction={handleNavClick} />
                    <TransitionLink href="#" label="ABOUT" scrollTo="SECTION_ABOUT" handleClickFunction={handleNavClick} />
                    <TransitionLink href="#" label="CONTACT" scrollTo="SECTION_CONTACT" handleClickFunction={handleNavClick} />
                </div>
            </div>
        </aside>
    )
}
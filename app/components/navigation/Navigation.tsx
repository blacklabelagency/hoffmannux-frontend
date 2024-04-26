'use client';
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import TransitionLink from "../transitionlink/TransitionLink";
import { useEffect, useState } from "react";

export default function Navigation(){

    const [navOn, setNavOn] = useState(false);

    return(
        <aside className={`nav-sidebar w-full md:w-[5%] h-[100vh] h-screen sticky top-0 p-4 ${navOn == true ? "nav-on" : "nav-off"}`}>
            <div className="flex flex-col items-center">
                <button className="text-4xl mb-10" onClick={() => navOn == true ? setNavOn(false) : setNavOn(true) }>
                    {navOn == false ? (
                        <RiMenu5Line />
                    ) : (
                        <RiCloseFill />
                    )}   
                </button>
                <div className="navigation-linkset">
                    <TransitionLink href="#" label="ABOUT" />
                    <TransitionLink href="#" label="SERVICES" />
                    <TransitionLink href="#" label="OUR WORK" />
                    <TransitionLink href="#" label="CONTACT" />
                </div>
            </div>
        </aside>
    )
}
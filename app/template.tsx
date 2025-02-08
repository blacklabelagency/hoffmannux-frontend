'use client'
import {useRef, useEffect, useContext} from 'react';
import { usePathname } from "next/navigation";

export default function Template({children}:{children:React.ReactNode}){

    const main = useRef<any>();
    const scrollPage = useRef<any>();

    return (
        <div ref={scrollPage} className="templateName">{children}</div>
    )
}
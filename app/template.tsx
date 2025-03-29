import {useRef, useEffect, useContext} from 'react';
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function Template({children}:{children:React.ReactNode}){


    return (
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
        <div className="hoffmann-template">{children}</div>
        </ReCaptchaProvider>
    )
}
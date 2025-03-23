'use client'
import ContactForm from "./ContactForm";
import { useInView } from "react-intersection-observer";

export default function Contact({sectionID}:{sectionID:string}){

    const { ref, inView, entry } = useInView({
        threshold: 0,
      });

    return (
        <div ref={ref} className={`page-section page-section-contact ${inView ? "inView" : ""}`} id={sectionID}>
            <div className="page-section__inner">
                <div className="page-section__header">
                    <div className="page-section__header-left">
                        <h3 className="section-header gsap_section_title">contact</h3>
                    </div>
                    <div className="page-section__header-right">
                        
                    </div>
                </div>
                <div className="page-section__body">
                    <div className="page-section__body__form-container">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
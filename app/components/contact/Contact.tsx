'use client'
import PageSectionDivider from "../pageSectionDivider/PageSectionDivider";
import ContactForm from "./ContactForm";

export default function Contact({sectionID}:{sectionID:string}){
    return (
        <div className="page-section page-section-contact" id={sectionID}>
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
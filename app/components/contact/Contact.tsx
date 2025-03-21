'use client'
import Summary from "../summary/Summary";

export default function Contact({sectionID}:{sectionID:string}){
    return (
        <div className="page-section page-section-contact" id={sectionID}>
            <div className="page-section__inner">
                <h3 className="section-header gsap_section_title">CONTACT</h3>
                <div className="page-section__body">
                    <p>contact form</p>
                </div>
            </div>
        </div>
    )
}
'use client'
import PageSectionDivider from "../pageSectionDivider/PageSectionDivider";

export default function Contact({sectionID}:{sectionID:string}){
    return (
        <div className="page-section page-section-contact" id={sectionID}>
            <div className="page-section__inner">
                <div className="page-section__header">
                    <div className="page-section__header-left">
                        <h3 className="section-header gsap_section_title">contact</h3>
                        <span className="section-header__description">
                            We can fill in at any part of your website or application lifecycle, or take on the whole project
                        </span>
                    </div>
                    <div className="page-section__header-right">
                        <PageSectionDivider />
                    </div>
                </div>
                <div className="page-section__body">
                    <p>contact form</p>
                </div>
            </div>
        </div>
    )
}
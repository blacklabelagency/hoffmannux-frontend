'use client'
import PageSectionDivider from "../pageSectionDivider/PageSectionDivider";
import Summary from "../summary/Summary";

export default function About({sectionID}:{sectionID:string}){
    return (
        <div className="page-section page-section-about" id={sectionID}>
             <div className="page-section__inner">
                <h3 className="section-header gsap_section_title">ABOUT</h3>
                <div className="page-section__body">
                    <div className="page-section__overview">
                        <p>We specialize in building custom web applications tailored to your business needs. With over 25 years of experience, we bring deep technical expertise and a commitment to delivering high-quality, scalable solutions.
                        As a boutique firm, we take a hands-on approach, working closely with our clients to develop software that is both functional and efficient. Whether you need a new application or improvements to an existing system, we provide reliable, customized solutions to help your business run smoothly.</p>
                    </div>
                </div>
             </div>
        </div>
    )
}
'use client'
import PageSectionDivider from "../pageSectionDivider/PageSectionDivider";
import { useInView } from "react-intersection-observer";

export default function About({sectionID}:{sectionID:string}){

    const { ref, inView, entry } = useInView({
        threshold: 0,
      });

    return (
        <div ref={ref} className={`page-section page-section-about ${inView ? "inView" : ""}`} id={sectionID}>
             <div className="page-section__inner">
                
                <div className="page-section__header">
                    <div className="page-section__header-left">
                        <h3 className="section-header gsap_section_title">about</h3>
                        <span className="section-header__description">
                            We can fill in at any part of your website or application lifecycle, or take on the whole project
                        </span>
                    </div>
                    <div className="page-section__header-right">
                        <PageSectionDivider />
                    </div>
                </div>

                <div className="page-section__body">
                    <div className="page-section__overview">
                        <div className="page-section__overview-media">
                            
                        </div>
                        <div className="page-section__overview-content">
                            <p>We specialize in building custom web applications tailored to your business needs. With over 25 years of experience, we bring deep technical expertise and a commitment to delivering high-quality, scalable solutions.
                        As a boutique firm, we take a hands-on approach, working closely with our clients to develop software that is both functional and efficient. Whether you need a new application or improvements to an existing system, we provide reliable, customized solutions to help your business run smoothly.</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
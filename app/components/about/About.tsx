'use client'
import PageSectionDivider from "../pageSectionDivider/PageSectionDivider";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

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
                    </div>
                    <div className="page-section__header-right">
                        <PageSectionDivider />
                    </div>
                </div>

                <div className="page-section__body">
                    <div className="page-section__overview">
                        <div className="page-section__overview-media relative">
                            
                        </div>
                        <div className="page-section__overview-content">
                            <p>we craft custom web applications designed to meet the unique needs of your business. With over 25 years of experience, we bring deep technical knowledge, thoughtful design, and a strong focus on building scalable, high-quality solutions.</p>
                            <p>As a boutique firm, we offer a personalized, hands-on approach—collaborating closely with every client to understand their goals and deliver software that’s both functional and elegant. From developing new applications to refining and modernizing existing systems, we provide reliable, tailored solutions that help your business thrive.</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
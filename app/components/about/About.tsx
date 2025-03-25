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
                            <Image 
                                src="https://blacklabelagency.com/wp-content/uploads/2025/03/about-image-hoffmann.png"
                                alt=""
                                fill={true}
                                sizes="100%"
                            />
                        </div>
                        <div className="page-section__overview-content">
                            <p>We guide businesses through the ever-evolving digital landscape, offering expert technical solutions tailored to your unique needs. With over 25 years of experience, we combine deep technical knowledge, creative design, and a focus on delivering scalable, high-quality solutions.</p>
                            <p>As a boutique firm, we take a personalized, hands-on approach—collaborating closely with each client to understand their goals and deliver results that are both functional and elegant. From web development and marketing to project management and system modernization, we craft reliable, customized solutions that help your business thrive.</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
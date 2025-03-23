'use client'
import ChatIcon from "../icons/ChatIcon"
import { useInView } from "react-intersection-observer";

export default function Services({sectionID}:{sectionID:string}){

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <div ref={ref} id={sectionID} className={`page-section page-section-services gsap_services ${inView ? "inView" : null}`}>
            <div className="page-section__inner">
                <div className="page-section__body">
                    <div className="page-section__banner services-banner">
                        <div className="page-section__banner-title">
                            <h3 className="page-section__banner-title__section-title">SERVICES</h3>
                            <span className="page-section__banner-title__section-description">We can fill in at any part of your website or application lifecycle, or take on the whole project.</span>
                        </div>
                        <div className="page-section__banner-cta">
                            <a href="#">
                                <ChatIcon />    
                                <span>{`Let's find the right solution for your business.`}</span>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-12">
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>APPLICATION DEVELOPMENT</h3>
                                <p>We specialize in building custom applications tailored to your business needs. From mobile apps to desktop solutions, we ensure seamless functionality, user-friendly design, and efficient performance.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/USER-EXPERIENCE-DESIGN-T.png" />
                            <div>
                                <h3>USER EXPERIENCE DESIGN + CONSULTATION</h3>
                                <p>Our team works with you to create engaging and intuitive user experiences. We focus on understanding your audience and designing interfaces that are easy to use, aesthetically pleasing, and conversion-focused.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>WEBSITE + USER-INTERFACE DESIGN</h3>
                                <p>We design custom responsive websites and web applications that drive engagement and deliver results. Our goal is to create a polished, professional presence online while ensuring excellent usability across all devices.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>SYSTEM DESIGN</h3>
                                <p>We offer expert system design services, crafting scalable and efficient architectures that support your business processes. Our solutions integrate seamlessly with existing systems and scale as your business grows.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/MARKETING-SUPPORT-2-T.png" />
                            <div>
                                <h3>MARKETING SUPPORT</h3>
                                <p>We provide marketing solutions that help you reach your target audience effectively. From digital marketing strategies to social media campaigns, we ensure your brand stands out and drives customer engagement.
                                </p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/PROJECT-MANAGEMENT-T.png" />
                            <div>
                                <h3>PROJECT MANAGEMENT</h3>
                                <p>Experienced project management services ensuring that your development projects are delivered on time and within budget. We coordinate teams, resources, and timelines to achieve the best results for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    )
}
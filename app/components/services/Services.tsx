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
                            <span className="page-section__banner-title__section-description">We can step in at any stage of your website or application lifecycle or handle the entire project from start to finish.</span>
                        </div>
                        <div className="page-section__banner-cta">
                            <a href="#SECTION_CONTACT">
                                <ChatIcon />    
                                <span>{`Let's find the right solution for your business.`}</span>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 my-12">
                        <div className="service-item">
                            <img src="https://blacklabelagency.com/wp-content/uploads/2025/03/APPLICATION-DEVELOPMENT.png" />
                            <div>
                                <h3>WEBSITE + USER-INTERFACE DESIGN</h3>
                                <p>We design custom responsive websites and web applications that drive engagement and deliver results. Our goal is to create a polished, professional presence online while ensuring excellent usability across all devices.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>APPLICATION DEVELOPMENT</h3>
                                <p>We specialize in building custom web applications tailored to your business needs. We ensure seamless functionality, user-friendly design, and efficient performance.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/USER-EXPERIENCE-DESIGN-T.png" />
                            <div>
                                <h3>USER EXPERIENCE DESIGN + CONSULTATION</h3>
                                <p>We want to tell your story on the web by creatin engaging and intuitive user experiences. We focus on understanding your audience and designing interfaces that are easy to use, aesthetically pleasing, and conversion-focused.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="https://blacklabelagency.com/wp-content/uploads/2025/03/HOFFMANNUX-ICONS.png" />
                            <div>
                                <h3>SYSTEM DESIGN</h3>
                                <p>We offer expert system design services, crafting scalable and efficient architectures that support your business processes. Our solutions integrate seamlessly with existing systems and scale as your business grows.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="https://blacklabelagency.com/wp-content/uploads/2025/03/MARKETING-SUPPORT-2.png" />
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
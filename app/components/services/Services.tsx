'use client'

import Summary from "../summary/Summary"

export default function Services({sectionID}:{sectionID:string}){
    return (
        <div id={sectionID} className="page-section page-section-services gsap_services">
            <details>
                <Summary title={"SERVICES"} />
                <div className="page-section__body">
                    <div className="flex align-start flex-wrap">
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
            </details>

      </div>
    )
}
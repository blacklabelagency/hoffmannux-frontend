'use client'

import Summary from "../summary/Summary"

export default function Services(){
    return (
        <div className="page-section page-section-services gsap_services">
            <details>
                <Summary title={"SERVICES"} />
                <div className="page-section__body">
                    <div className="flex align-start flex-wrap">
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>APPLICATION DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/USER-EXPERIENCE-DESIGN-T.png" />
                            <div>
                                <h3>USER EXPERIENCE DESIGN + CONSULTATION</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>WEBSITE + USER-INTERFACE DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/APPLICATION-DEVELOPMENT-T.png" />
                            <div>
                                <h3>SYSTEM DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/MARKETING-SUPPORT-2-T.png" />
                            <div>
                                <h3>MARKETING SUPPORT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <img src="/images/PROJECT-MANAGEMENT-T.png" />
                            <div>
                                <h3>PROJECT MANAGEMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </details>

      </div>
    )
}
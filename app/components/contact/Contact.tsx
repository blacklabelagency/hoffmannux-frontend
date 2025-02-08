'use client'
import Summary from "../summary/Summary";

export default function Contact(){
    return (
        <div className="page-section page-section-contact">
            <details>
                <Summary title={"CONTACT"} />
                <div className="page-section__body">
                    <p>contact form</p>
                </div>
            </details>
        </div>
    )
}
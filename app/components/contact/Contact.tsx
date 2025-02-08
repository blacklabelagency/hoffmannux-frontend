'use client'
import Summary from "../summary/Summary";

export default function Contact({sectionID}:{sectionID:string}){
    return (
        <div className="page-section page-section-contact" id={sectionID}>
            <details>
                <Summary title={"CONTACT"} />
                <div className="page-section__body">
                    <p>contact form</p>
                </div>
            </details>
        </div>
    )
}
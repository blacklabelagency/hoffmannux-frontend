import { useState } from "react";
import PlusSign from "../icons/PlusSign";

export default function Summary({title}:{title:string}){

    const [showDetails, setShowDetails] = useState(false);

    const handleSummaryClick = () => {
        setShowDetails(showDetails ? false: true);
    }
    return (
        <summary onClick={handleSummaryClick} className="section-header gsap_section_title">
            <span>{title}</span>
            <PlusSign setIconOn={showDetails} />
        </summary>
    )
}
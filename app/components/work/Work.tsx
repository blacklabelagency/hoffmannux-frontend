'use client'
import { useEffect, useState } from "react"
import WorkDetail from "./WorkDetail"
import WorkTabs from "./WorkTabs"
import WorkList from "./WorkList"
import "@/app/interfaces/WorkData.interface"
import PlusSign from "../icons/PlusSign"
import Summary from "../summary/Summary"

export default function Work({jsondata, sectionID}:{jsondata:WorkData, sectionID:string}){

    const [workDetailOn, setWorkDetailOn] = useState(false);
    const [workDetailTitle, setWorkDetailTitle] = useState<string>("");
    const [workItem, setWorkItem] = useState<WorkDetail | null>(null);
    const [workType, setWorkType] = useState("recent");
    const [showWorkDetails, setShowWorkDetails] = useState(false);

    const handleWorkItemClick = (workItem:WorkDetail) => {
        setWorkDetailTitle(workItem.title);
        setWorkDetailOn(true);
        setWorkItem(workItem);
    }

    const workDetailClose = () => {
        setWorkDetailOn(false);
    }

    const handleWorkTabClick = (workType:string) =>{
        setWorkType(workType);
    }

    const handleSummaryClick = () => {
        setShowWorkDetails(showWorkDetails ? false: true);
    }

    useEffect(()=> {
        workDetailOn == true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
    }, [workDetailOn])

    return (
        <div className="page-section page-section-work" id={sectionID}>
            <details>
                <Summary title={"WORK"} />
                <div className="page-section__body">
                    <WorkList 
                        workType={workType}
                        workList={jsondata.work}
                        handleWorkItemClick={(workItem)=>handleWorkItemClick(workItem)}
                    /> 
                    <WorkDetail 
                        workData={workItem} 
                        workDetailClose={workDetailClose}
                        workDetailOn={workDetailOn}
                        workDetailTitle={workDetailTitle}
                    />
                </div>
            </details>
        </div>
    )
}
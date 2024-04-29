'use client'
import { useEffect, useState } from "react"
import WorkDetail from "./WorkDetail"
import WorkTabs from "./WorkTabs"
import WorkList from "./WorkList"
import "@/app/interfaces/WorkData.interface"

export default function Work({jsondata}:{jsondata:WorkData}){

    const [workDetailOn, setWorkDetailOn] = useState(false);
    const [workDetailTitle, setWorkDetailTitle] = useState<string>("");
    const [workItem, setWorkItem] = useState<WorkDetail | null>(null);
    const [workType, setWorkType] = useState("recent");

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

    useEffect(()=> {
        workDetailOn == true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto";
    }, [workDetailOn])

    return (
        <div className="page-section page-section-work">
            <div className="section-header text-center">
                <h1 className="text-[var(--hoffmann-blue)] section-title w-auto m-auto">OUR WORK</h1>
                <div className="text-white w-auto text-sm px-[15vw] section-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet, hendrerit in nisl. </div>
            </div>
            <WorkTabs 
                workList={jsondata.workTypes} 
                workTabClick={(workType)=>handleWorkTabClick(workType)} 
            />
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
    )
}
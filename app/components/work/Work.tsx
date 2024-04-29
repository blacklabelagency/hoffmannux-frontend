'use client'
import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import WorkDetail from "./WorkDetail";
import WorkTabs from "./WorkTabs";

export default function Work(){

    const [workDetailOn, setWorkDetailOn] = useState(false);
    const [workDetailTitle, setWorkDetailTitle] = useState<string>("");

    const handleWorkItemClick = (type:string) => {
        console.log(type);
        setWorkDetailTitle(type);
        setWorkDetailOn(true);
    }

    const workDetailClose = () => {
        setWorkDetailOn(false);
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
            <WorkTabs workList={[]}/>
            <div className="work-list">
                <div className="work-item" onClick={() => handleWorkItemClick('websites')}>
                    <h3>Websites</h3>
                    <RiArrowRightLine />
                </div>
                <div className="work-item" onClick={() => handleWorkItemClick('applications')}>
                    <h3>Applications</h3>
                    <RiArrowRightLine />
                </div>
                <div className="work-item" onClick={() => handleWorkItemClick('branding')}>
                    <h3>Branding</h3>
                    <RiArrowRightLine />
                </div>
                <div className="work-item" onClick={() => handleWorkItemClick('branding')}>
                    <h3>Branding</h3>
                    <RiArrowRightLine />
                </div>
            </div>
            
            
            <WorkDetail 
                workData={{title: "TEST", description: "test desc", images: []} } 
                workDetailClose={workDetailClose}
                workDetailOn={workDetailOn}
                workDetailTitle={workDetailTitle}
            />
            
        </div>
    )
}
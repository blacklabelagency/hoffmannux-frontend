'use client'
import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine, RiCloseLine } from "react-icons/ri";
import WorkDetail from "./WorkDetail";
import WorkTabs from "./WorkTabs";

export default function Work(){

    const [workDetailOn, setWorkDetailOn] = useState(false);
    const [workDetailTitle, setWorkDetailTitle] = useState<String>("");

    const handleWorkItemClick = (type:string) => {
        console.log(type);
        setWorkDetailTitle(type);
        setWorkDetailOn(true);
    }

    const workDetailClose = () => {
        setWorkDetailOn(false);
    }

    return (
        <div className="page-section page-section-work">
            <div className="section-header text-center">
                <h1 className="text-[var(--hoffmann-blue)] section-title w-auto m-auto">OUR WORK</h1>
                <div className="text-white w-auto text-sm px-[15vw] section-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh neque, ultrices a hendrerit sit amet, hendrerit in nisl. </div>
            </div>
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
            <div className={`work-detail ${workDetailOn ? "work-detail-on" : "work-detail-off"}`}>
                <div className="flex items-center justify-between">
                    <h2 className="flex items-center"><button onClick={()=>workDetailClose()} className="text-4xl mr-2"><RiArrowLeftLine /></button>{workDetailTitle.toUpperCase()}</h2>
                    <button onClick={()=>workDetailClose()} className="text-4xl"><RiCloseLine /></button>
                </div>
                <WorkTabs workList={[]}/>
                <WorkDetail workData={{title: "TEST", description: "test desc", images: []} }/>
            </div>
        </div>
    )
}
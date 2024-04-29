'use client'
import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function WorkList({
        workType, 
        workList, 
        handleWorkItemClick
    }:{
        workType:string, 
        workList:Array<any>,
        handleWorkItemClick:(workType:string)=>any
    }){

    
    const [currentWorkList, setCurrentWorkList] = useState(workList.filter((item)=> item.worktype?.includes("recent")))
    
    useEffect(()=>{
        let filteredWorkList = workList.filter((item)=> item.worktype?.includes(workType));
        setCurrentWorkList(filteredWorkList);
    }, [workType]);

    return (
        <div className="work-list">

                {currentWorkList && currentWorkList.map((workItem)=>(
                    <div className="work-item" onClick={() => handleWorkItemClick(workItem)}>
                    <h3>{workItem.title}</h3>
                    <RiArrowRightLine />
                    </div>
                ))}
            {/* <div className="work-item" onClick={() => handleWorkItemClick('websites')}>
                <h3>{workType}</h3>
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
            </div> */}
        </div>
    )
}
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
        handleWorkItemClick:(workItem:WorkDetail)=>any
    }){

    const [currentWorkList, setCurrentWorkList] = useState(workList.filter((item)=> item.worktype?.includes("recent")))
    
    useEffect(()=>{
        let filteredWorkList = workList.filter((item)=> item.worktype?.includes(workType));
        setCurrentWorkList(filteredWorkList);
    }, [workType]);

    return (
        <div className="work-list">
                {currentWorkList && currentWorkList.map((workItem, index)=>(
                    <div key={`work-item-${index}`}className="work-item" onClick={() => handleWorkItemClick(workItem)}>
                        <h3>{workItem.title}</h3>
                        <RiArrowRightLine />
                    </div>
                ))}
        </div>
    )
}
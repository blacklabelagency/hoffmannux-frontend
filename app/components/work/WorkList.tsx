'use client'
import { Interweave } from "interweave";
import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";

export default function WorkList({
        workType, 
        workList, 
        handleWorkItemClick
    }:{
        workType:string, 
        workList:Array<any>,
        handleWorkItemClick:(workItem:WorkDetail)=>any
    }){

    //const [currentWorkList, setCurrentWorkList] = useState(workList.filter((item)=> item.worktype?.includes("recent")))
    const [currentWorkList, setCurrentWorkList] = useState(workList);
    console.log(currentWorkList);
    
   /* useEffect(()=>{
        let filteredWorkList = workList.filter((item)=> item.worktype?.includes(workType));
        setCurrentWorkList(filteredWorkList);
    }, [workType]);*/

    return (
        <div className="work-list">
                {currentWorkList && currentWorkList.map((workItem, index)=>(
                    <div key={`work-item-${index}`}className="work-item" onClick={() => handleWorkItemClick(workItem)}>
                        <div className="work-item__media">
                            <Image 
                                src={String(workItem?.info.overview.image)} 
                                alt={`image for ${workItem.title}`}
                                width={500}
                                height={500}
                                style={{width: 'auto', height: 'auto'}}
                            />
                        </div>
                        <div className="work-item__content">
                            <div className="work-item__content__top">
                                <h3>{workItem.title}</h3>
                                <div className="work-item__description"><Interweave content={workItem?.info.overview.text} /></div>
                            </div>
                            <button>LEARN MORE <RiArrowRightLine /></button>
                        </div>
                    </div>
                ))}
        </div>
    )
}
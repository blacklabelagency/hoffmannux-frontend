'use client'
import { Interweave } from "interweave";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import CornerIcon from "../icons/CornerIcon";

export default function WorkList({
        workType, 
        workList, 
        handleWorkItemClick
    }:{
        workType:string, 
        workList:Array<any>,
        handleWorkItemClick:(workItem:WorkDetail)=>any
    }){

    const [currentWorkList, setCurrentWorkList] = useState(workList);
    

    return (
        <div className="work-list">
                {currentWorkList && currentWorkList.map((workItem, index)=>(
                    <div key={`work-item-${index}`} className={`work-item width-${workItem.width}`} onClick={() => handleWorkItemClick(workItem)}>
                        <div className="work-item__media">
                            <CornerIcon />
                            <Image 
                                src={String(workItem?.info.overview.image)} 
                                alt={`image for ${workItem.title}`}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="work-item__content">
                            <div className="work-item__content__top">
                                <h3><span>{workItem.title}</span></h3>
                                <div className="work-item__description"><Interweave content={workItem?.info.overview.tagline} /></div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
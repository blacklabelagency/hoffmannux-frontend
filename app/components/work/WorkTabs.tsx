'use client'

import { useEffect, useState } from "react";

export default function WorkTabs({workList, workTabClick}:{workList:Array<string>, workTabClick:(workType:string)=>any}){

    const [currentWorkType, setCurrentWorkType] = useState("recent");

    const handleWorkTabClick = (workType:string) => {
        setCurrentWorkType(workType);
        workTabClick(workType);
    }

    return (
        <div className="work-tabs w-full m-auto">
            <div className="flex items-center justify-center mt-6">
                {workList.map((worktype:string, i:number) => {
                    return (
                        <button className={`px-4 ${worktype==currentWorkType ? "active" : ""}`} key={`worktab-`+i} onClick={()=>handleWorkTabClick(worktype)}>{worktype.toUpperCase()}</button>    
                    )
                })}
            </div>
        </div>
        
    )
}
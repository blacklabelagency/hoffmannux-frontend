'use client'
import { RiArrowRightLine } from "react-icons/ri";

export default function WorkList({workType, workList, handleWorkItemClick}: 
    {
        workType:string, 
        workList:Array<string>,
        handleWorkItemClick:(workType:string)=>any
    }){

    return (
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
    )
}
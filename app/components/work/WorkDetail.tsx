import { RiArrowLeftLine, RiCloseLine } from "react-icons/ri"
import "@/app/interfaces/WorkDetail.interface"

export default function WorkDetail(
    {
        workData, 
        workDetailOn, 
        workDetailClose,
        workDetailTitle
    }:{
        workData:WorkDetail | null, 
        workDetailOn:boolean, 
        workDetailClose:()=> any,
        workDetailTitle:string

    }){
    
    return (
        <div className={`work-detail ${workDetailOn ? "work-detail-on" : "work-detail-off"}`}>
                <div className="flex items-center justify-between">
                    <h2 className="flex items-center"><button onClick={()=>workDetailClose()} className="text-4xl mr-2"><RiArrowLeftLine /></button>{workDetailTitle.toUpperCase()}</h2>
                    <button onClick={()=>workDetailClose()} className="text-4xl"><RiCloseLine /></button>
                </div>
                <div>
                    <h2>{workData?.title}</h2>
                    <p>{workData?.description}</p>
                </div>
        </div>
    )
}
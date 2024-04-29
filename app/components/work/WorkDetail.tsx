import { RiArrowLeftLine, RiCloseLine } from "react-icons/ri"
import "@/app/interfaces/WorkDetail.interface"
import { Interweave } from "interweave"

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
                <div className="border-b-[1px] border-color-white p-2 text-center">
                    <button onClick={()=>workDetailClose()} className="text-4xl"><RiCloseLine /></button>
                </div>
                <div className="work-detail-body">
                    <div className="text-center">
                        <h2>{workData?.title.toUpperCase()}</h2>
                        <a href={workData?.url} target="_blank" className="mb-4 block underline">{workData?.url}</a>
                        <Interweave content={workData?.info.overview.text} />
                    </div>
                </div>
        </div>
    )
}
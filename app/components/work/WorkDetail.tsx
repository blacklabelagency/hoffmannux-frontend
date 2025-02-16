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
                <div className="work-detail-left-border"></div>
                <div className="text-center">
                    <button onClick={()=>workDetailClose()} className="text-4xl"><RiCloseLine /></button>
                </div>
                <div className="work-detail-body">
                    <div className="work-detail-heading">
                        <h2>{workData?.title.toUpperCase()}</h2>
                        <a href={workData?.url.url} target="_blank" className="mb-4 block underline">{workData?.url.text}</a>
                        <div className="px-[10vw] mb-6">
                            <Interweave content={workData?.info.overview.text} />
                        </div>
                    </div>
                    <div className="text-center work-detail-body-inner">
                        
                            {workData?.info.details.map((workItem, i) => {
                                return (
                                    <div key={`work-item-${i}`} className="work-item">
                                        <div className="work-item-bgimage" style={{backgroundImage: `url(${workItem.image})`}}></div>
                                        <div className="work-item-content">
                                            <div>
                                                <h3>{workItem.title}</h3>
                                                <div className="work-details-text"><Interweave content={workItem.text} /></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        
                    </div>
                </div>
        </div>
    )
}
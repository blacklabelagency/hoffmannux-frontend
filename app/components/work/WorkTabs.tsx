'use client'
export default function WorkTabs({workList, workTabClick}:{workList:[], workTabClick:(workType:string)=>any}){

    return (
        <div className="work-tabs w-full m-auto">
            <div className="flex items-center">
                <button onClick={()=>workTabClick("recent")}>RECENT</button>
                <button onClick={()=>workTabClick("websites")}>WEBSITES</button>
                <button onClick={()=>workTabClick("applications")}>APPLICATIONS</button>
                <button onClick={()=>workTabClick("branding")}>BRANDING</button>
                <button onClick={()=>workTabClick("other")}>OTHER</button>
            </div>
        </div>
        
    )
}
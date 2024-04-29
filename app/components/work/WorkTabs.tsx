'use client'
export default function WorkTabs({workList, workTabClick}:{workList:Array<string>, workTabClick:(workType:string)=>any}){

    return (
        <div className="work-tabs w-full m-auto">
            <div className="flex items-center justify-center mt-6">
                {workList.map((worktype:string, i:number) => {
                    return (
                        <button className="px-4" key={`worktab-`+i} onClick={()=>workTabClick(worktype)}>{worktype.toUpperCase()}</button>    
                    )
                })}
            </div>
        </div>
        
    )
}
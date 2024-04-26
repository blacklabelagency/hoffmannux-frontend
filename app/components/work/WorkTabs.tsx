export default function WorkTabs({workList}:{workList:[]}){
    return (
        <div className="work-tabs w-full m-auto">
            <div className="flex items-center">
                <button>RECENT</button>
                <button>WEBSITES</button>
                <button>APPLICATIONS</button>
                <button>BRANDING</button>
                <button>OTHER</button>
            </div>
        </div>
    )
}
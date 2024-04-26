interface WorkDetail {
    title: string,
    description: string,
    images: []
}

export default function WorkDetail({workData}:{workData:WorkDetail | null}){
    return (
        <div>
            <h2>{workData?.title}</h2>
            <p>{workData?.description}</p>
        </div>
    )
}
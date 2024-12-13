interface WorkDetail {
    title: string,
    url: {url:string, text:string},
    worktype: Array<string>,
    info: {
        overview: {
            text:string,
            image:string
        },
        details: Array<WorkDetailDetail>
    },
    content: string,
    stack: Array<string>,
    featuredImage: string,
    images: Array<string>
}

interface WorkDetailDetail {
    title:string,
    text:string,
    image:string
}
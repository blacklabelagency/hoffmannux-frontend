interface WorkDetail {
    title: string,
    url: string,
    worktype: Array<string>,
    info: {
        overview: {
            text:string,
            image:string
        }
    },
    content: string,
    stack: Array<string>,
    featuredImage: string,
    images: Array<string>
}
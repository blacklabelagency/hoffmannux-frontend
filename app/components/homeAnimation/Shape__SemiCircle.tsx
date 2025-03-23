export default function SemiCircle({customclass}:{customclass:String|null}){
    
    return (
        <div className={`shape__semicircle ${customclass}`}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 8C0 12.4183 3.58172 16 8 16V0C3.58172 0 0 3.58172 0 8Z" ></path> </g></svg>
        </div>
    )
}
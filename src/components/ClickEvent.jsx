import EventProps from "./EventProps";

const ClickEvent = () => {

    let handleClick = (param)=>{
        alert(`working on it ${param}`)
    }

    let handleHover = (param)=>{
        alert(`Thanks for hovering ${param}`)
    }

    return ( 
        <>
            {/* <button className="danger mt-3" onClick={()=>handleClick("shahzaib")}>Click for more details</button> */}

            <EventProps onHandleClick={()=>handleClick("shahzaib")} onHandleHover={()=>handleHover("shahzaib")}/>
        </>
     );
}
 
export default ClickEvent;
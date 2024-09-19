

const EventProps = (props) => {

    const {onHandleClick,onHandleHover} = props

    return ( 
        <>
            <button className="danger mt-3" onClick={onHandleClick}>Click for more details</button>  
            <button className="danger mt-3" onMouseEnter={onHandleHover}>Hover for more details</button>  
        </>
     );
}
 
export default EventProps;
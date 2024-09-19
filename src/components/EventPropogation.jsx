
const EventPropogation = () => {

    let handleClickEvent1 =()=>{
        console.log("this is grandparent");
    }
    let handleClickEvent2 =()=>{
        console.log("this is parent");
        
    }
    let handleClickEvent3 =(e)=>{
        e.stopPropagation()
        console.log("this is child");
    }

    return ( 
        <>
            <div onClick={handleClickEvent1}>
                <div onClick={handleClickEvent2}>
                    <button onClick={handleClickEvent3}>Click me</button>
                </div>
            </div>
        </>
     );
}
 
export default EventPropogation;
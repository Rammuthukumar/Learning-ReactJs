function Event(){
    const handleClick = (e) => {
        if(e.target.textContent === 'click')
            e.target.textContent = 'clicked';
        else e.target.textContent = 'click';
    }

    const handleDoubleClick = (e) => {
        console.log('double clicked');
    }

    return(
        <>
             <button onClick={(e)=>handleClick(e)}>Click me</button>
             <button onDoubleClick={(e)=>{handleDoubleClick(e)}}>Double click</button>
        </>
       
    )
}
export default Event;
// useEffect() -> React hook tells react to DO SOME CODE WHEN (PICK ONE) : 
//                  1. The component re-renders
//                  2. The component mounts
//                  3. The state of a value.

import React, { useState, useEffect } from "react"

// useEffect(()=>{}) // Runs after every re-render
// useEffect(()=>{},[]) // Runs only on mount
// useEffect(()=>{},[dependenices])  // Runs on mount + when value changes

function UseEffect(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResizeChange);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize",handleResizeChange);
            console.log("EVENT LISTENER REMOVED");
        }
    },[])

    useEffect(()=>{
        document.title = `Size ${width} X ${height}`
    },[width, height])

    function handleResizeChange(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Window width : {width}</p>
            <p>Window height : {height}</p>
        </>
    )


  /*  const [count, setCount] = useState(0);
    const [color, setColor] = useState();

    useEffect(()=>{
        document.title = `Count :  ${count}`
    },[color, count])

    function addCount(){
        setCount(c => c+1);
    }

    function changeColor(){
        setColor(c => c === "green"? "red": "green")
    }

    return(
        <div>
            <p style={{color : color}}>Count : {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
        */
}
export default UseEffect
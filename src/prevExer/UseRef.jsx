// useRef() -> use Reference Does not cause re renders without causing changes.
//             1. Accessing/interacting with DOM elements
//             2. Handling animations, tranistions and focus
//             3. Managing timers and intervals.

import React, {useEffect, useRef} from "react";

function UseRef(){
    const ref = useRef(0);

    useEffect(()=>{
        console.log("COMPONENT RERENDERED");        // if we use useState the component will rerender whenever a change occur.
        console.log(ref.current);
    })

    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }

    return(
        <div>
            <button onClick={handleClick}>Click me</button>
           
        </div>
    )
}
export default UseRef
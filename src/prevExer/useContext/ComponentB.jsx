/*
useContext() -> A react hook allows us to share values btwn multiple levels of components without having to 
use to props as a parameter to pass to each component.


*/


import React from "react"
import ComponentC from "./ComponentC.jsx"
 
function ComponentB(){
    return(
        <div className="container">
            <h1>ComponentB</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB
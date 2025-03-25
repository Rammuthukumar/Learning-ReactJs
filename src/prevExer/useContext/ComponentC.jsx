/*
useContext() -> A react hook allows us to share values btwn multiple levels of components without having to 
use to props as a parameter to pass to each component.


*/


import React from "react"
import ComponentD from "./ComponentD.jsx"

function ComponentC(){

    return(
        <div className="container">
            <h1>ComponentC</h1>
            <ComponentD/>
        </div>
    )
}

export default ComponentC
/*
useContext() -> A react hook allows us to share values btwn multiple levels of components without having to 
use to props as a parameter to pass to each component.


*/


import React, {useState, useContext} from "react"
import { NameContext } from "./ComponentA.jsx";

function ComponentD(){

    const name = useContext(NameContext);

    return(
        <div className="container">
            <h1>ComponentD</h1>
            <h1>Hello {name}</h1>
        </div>
    )
}

export default ComponentD
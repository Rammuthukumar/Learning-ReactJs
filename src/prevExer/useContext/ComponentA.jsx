/*
useContext() -> A react hook allows us to share values btwn multiple levels of components without having to 
use to props as a parameter to pass to each component.


*/


import React, {useState, createContext} from "react"
import ComponentB from "./ComponentB.jsx";

export const NameContext = createContext(); 

function ComponentA(){
    const [name, setName] = useState("Ram");

    return(
        <div className="container">
            <h1>ComponentA</h1>
            <h1>Hello {name}</h1>
            <NameContext.Provider value={name}>
                <ComponentB />
            </NameContext.Provider>
            
        </div>
    )
}

export default ComponentA
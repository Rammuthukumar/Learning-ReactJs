// React hook - Specail function that allows functional components to use React functions without using Class components
// for e.g useState(), useEffect(), useContext(), useReducer(), useCallback() and more...

// useState - A React hook that allows the creation of stateful variable and setter function to update its value in virtaul DOM.
import React, {useState} from 'react'


function UseState(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);

    const updateName = () => setName('ram');
    const incrementAge = () => setAge(age + 1);
    const toggleStatus = () => setIsStudent(!isStudent);
    

    return (
        <>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>isStudent: {isStudent ? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>Toggle</button>
        </>
    );
}
export default UseState
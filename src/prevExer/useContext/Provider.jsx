import { useEffect, useState } from "react";

const Provider = () => {
    const [name,setName] = useState(localStorage.getItem('name') || name);
    const inputElem = useRef(null);

    const handleNameChange = (event) => {
        setName(n => n = event.target.value)
    }

    useEffect(()=>{
        input
    },[])

    useEffect(()=>{
        localStorage.setItem('name',name);
    },[name]);

    
    return (
        <>
            <input ref={inputRef} type="text" onChange={() => handleNameChange} />
            <button onClick={displayName}>Submit</button>
        </>
    )
}
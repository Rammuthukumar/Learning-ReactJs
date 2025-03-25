import React, {useState, useContext} from "react";
import { ContextCreator } from "./Fetch";

function AddPost(){
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    const {posts, setPosts} = useContext(ContextCreator);

    function addNewPost(){
        if(newTitle.trim() === "" || newBody.trim() === ""){
          console.log("Enter the mandatory fields");
          return;
        }
    
        fetch("https://jsonplaceholder.typicode.com/posts",{
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({title: newTitle, body: newBody})
        })
          .then(response=>response.json())
          .then(json=> {
            setPosts([...posts,json]);
            setNewBody("");
            setNewTitle("");
          }).catch(e=>console.log(e));
    }

    return (
        <div>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} />
            <input type="text" value={newBody} onChange={(e)=>setNewBody(e.target.value)} />
            <button onClick={addNewPost}>ADD</button>
        </div>
    )
}

export default AddPost
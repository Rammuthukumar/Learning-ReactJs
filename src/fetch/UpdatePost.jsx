import React, {useState, useContext} from "react";
import { ContextCreator } from "./Fetch";

function UpdatePost(){
    const [updateId, setUpdateId] = useState(0);
    const [updateTitle, setUpdateTitle] = useState("");
    const [updateBody, setUpdateBody] = useState("");

    const {posts, setPosts} = useContext(ContextCreator);

    function updatePost(){
        if(updateId.trim() === "" || updateTitle.trim() === "" || updateBody.trim() === ""){
          console.log("Enter the mandatory fields");
          return;
        }
    
        const postId = parseInt(updateId)
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
          method: "PUT",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({title: updateTitle, body: updateBody})
        })
          .then(respone=>respone.json())
          .then(json=>{
            setPosts(posts.map((post,id)=> id === postId ? json : post));
            setUpdateId("");
            setUpdateTitle("");
            setUpdateBody("");
          })
    }

    return (
        <div>
            <input type="text" value={updateId} onChange={(e)=>setUpdateId(e.target.value)} />
            <input type="text" value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)} />
            <input type="text" value={updateBody} onChange={(e)=>setUpdateBody(e.target.value)} />
            <button onClick={updatePost}>UPDATE</button>
        </div>
    )
}

export default UpdatePost
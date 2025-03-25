import React, {useState, useContext} from "react";
import { ContextCreator } from "./Fetch";

function DeletePost(){
    const [deleteId, setDeleteId] = useState(0);
    const {posts,setPosts} = useContext(ContextCreator);

    function deletePost(){
        if(deleteId.trim() === ""){
          console.log("Enter the mandatory field");
          return;
        }
    
        const postId = parseInt(deleteId);
    
        if(postId < 0 && postId > 15) return;
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${deleteId}`,{
          method: "DELETE"
        })
          .then(response=>{
            if(response.ok){
              setPosts(posts.filter((_,i)=> i !== postId));
              console.log("Successfully Deleted")
              setDeleteId();
            }
          }).catch(e=>console.log(e))
          
    }
    return (
        <div>
            <input type="text" value={deleteId} onChange={(e)=>setDeleteId(e.target.value)}/>
            <button onClick={deletePost}>DELETE</button>
        </div>
    )
}

export default DeletePost
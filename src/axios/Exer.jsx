import axios from 'axios';
import { useEffect, useState } from 'react';

function Exer(){
    const [posts, setPosts] = useState(null);

    const updatePost = {
        "title": "Updated Post Title"  
    }

    function addPost(){
        axios.delete('https://jsonplaceholder.typicode.com/posts/7')
            .then(response=> {
                console.log(response)
                if(response.status === 200){
                    setPosts(response.data)
                }
                else console.log('error')
            }) 
            .catch(e=>console.log(e))
    }

    return (
        <div>
            <h1>Post data</h1>
            {
                posts ? <p> {posts.title}  </p> : <p>Loading...</p>
            }
            <button onClick={addPost}>ADD</button>
        </div>
    )
}
export default Exer
import { createContext, useEffect, useState } from "react";

export const ContextCreator = createContext();

function Fetch({children}){
  const [posts, setPosts] = useState();
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response=>response.json())
          .then(json=>setPosts(json.slice(0,10)))
          .catch(e=>console.log(e));
    
  },[]);

  return(
    <div>
      <div>
        <h1>List of Posts...</h1>
        <ul> {
            posts ? <p> {
                posts.map((post,i)=> <li key={i}>{post.title} - {post.body}</li> ) }
              </p> :
              <p>Loading...</p>
        } </ul>
      </div>

      <ContextCreator.Provider value={{posts, setPosts}}>
        {children}
      </ContextCreator.Provider>

    </div>
  )
}
export default Fetch;
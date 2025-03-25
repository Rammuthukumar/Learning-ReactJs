import Fetch from "./fetch/Fetch";
import AddPost from "./fetch/AddPost";
import UpdatePost from "./fetch/UpdatePost";
import DeletePost from "./fetch/DeletePost";
import React from "react";

function App() {
  return (
    <>
      <Fetch>
        <AddPost/>
        <UpdatePost/>
        <DeletePost/>
      </Fetch>
    </>
  )
}

export default App

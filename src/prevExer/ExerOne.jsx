import React, {useState} from 'react';

function ExerOne() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addNewTask(){
        if(newTask.trim() === "") return;
        setTasks([...tasks,newTask])
        setNewTask("");
    }

    function deleteTask(i){
        setTasks(tasks.filter((_,id)=> id !== i))
    }

    return(
        <div>
            <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
            <button onClick={addNewTask}>ADD</button>
            <ul>
                {tasks.map((t,i)=> 
                    <li key={i} onClick={()=> deleteTask(i)}>{t}</li>)
                }
            </ul>
            
        </div>
    )
}
export default ExerOne
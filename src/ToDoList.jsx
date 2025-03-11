import React, {useState} from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Walking", "Go to Office"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        setTasks(t => [...t, newTask])
    }
    function handleRemoveTask(index){
        setTasks(tasks.filter((_,i) => i !== index))
    }
    function handleMoveUpTask(index){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
        setTasks(updatedTask);
    }
    function handleMoveDownTask(index){
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
        setTasks(updatedTask);
    }

    return(
        <div>
            <h1>To Do List app</h1>
            <div>
                <input type="text" value={newTask} onChange={handleInputChange} />
                <button onClick={handleAddTask}>Add</button>
            </div>
            
            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span>{task}</span>
                    <button onClick={()=> handleRemoveTask(index)}>Delete</button>
                    <button onClick={()=> handleMoveUpTask(index)}>UP</button>
                    <button onClick={()=> handleMoveDownTask(index)}>Down</button>
                </li> )}
            </ol>
        </div>
    )
}
export default ToDoList
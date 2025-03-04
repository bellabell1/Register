import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleNewTaskChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    

    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);

    }

     function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        
        } else {
            alert("you can't move the first task up");
        }
     }

     function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        
        } else {
            alert("you can't move the last task down");
        }
     }

     function editTask(index){
        const updatedTasks = [...tasks];
        updatedTasks[index] = prompt("Edit Task", updatedTasks[index]);
        setTasks(updatedTasks);
     }
    return (
       <div className="to-do-list">
     <h1>My Todo List</h1>
     <div>
     <input 
     type="text" 
     placeholder='New Task' 
     value={newTask}  
     onChange={handleNewTaskChange}
     onKeyDown={(event) =>{
        if(event.key === 'Enter'){
            addTask();
        }
     } }
     />
     <button className="add-button" onClick={addTask} >Add</button>
     </div>
     <ol>
        {tasks.map((task, index) => 
        <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            <button className='edit-button' onClick={() => editTask(index)}>Edit</button>
            <button className='move-button' onClick={() => moveTaskUp(index)}>Up</button>
            <button className='move-button' onClick={() => moveTaskDown(index)}>Down</button>
        </li>)}
     </ol>
    </div>
    )
}

export default ToDoList;
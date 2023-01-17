import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../style-sheets/ToDoList.css'
import Task from "./Task.jsx";


function ToDoList(){

    const [tasks, setTask] = useState([]);

    const addTask = task => {

      if (task.text.trim()){
        task.text = task.text.trim();
        const updatedTasks = [task, ...tasks];
        setTask(updatedTasks);
      }
    }

    return (
      <>
      <TaskForm onSubmit={addTask} />
      <div className='todolist-container'>
        {
          tasks.map((task) => 
            <Task
              key = {task.id}
              id = {task.id}
              text={task.text}
              completed = {task.completed}
            />
          )
        }
      </div>
      </>
    );
}

export default ToDoList;
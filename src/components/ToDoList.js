import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../style-sheets/ToDoList.css'
import Task from "./Task.jsx";


function ToDoList(){

    const [tasks, setTask] = useState([]);

    /**
     * Add Task
     */
    const addTask = task => {

      if (task.text.trim()){
        task.text = task.text.trim();
        const updatedTasks = [task, ...tasks];
        setTask(updatedTasks);
      }
    };

    /**
     * Delete Task
     */

    const deleteTask = id =>{
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTask(updatedTasks)
    };

    /**
     * Complete task
     */

    const completeTask = id => {
      const updatedTasks = tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      setTask(updatedTasks);
    };


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
              completetask = {completeTask}
              deletetask = {deleteTask}
            />
          )
        }
      </div>
      </>
    );
}

export default ToDoList;
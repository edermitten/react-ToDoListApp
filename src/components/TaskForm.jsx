import React from "react";
import '../style-sheets/TaskForm.css'

function TaskForm(props) {
  return(
    <form className='task-form'>
      <input className='task-input' type='text' placeholder='Enter a task' name='text' />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
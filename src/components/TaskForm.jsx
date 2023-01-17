import React, { useState } from "react";
import '../style-sheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSend = e => {
    e.preventDefault();
    

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);

    //console.log(newTask);
  }

  return(
    <form className='task-form' onSubmit={handleSend}>
      <input className='task-input' type='text' placeholder='Enter a task' name='text' onChange={handleChange}/>
      <button className='task-button'>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
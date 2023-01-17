import React from "react";
import '../style-sheets/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, completed, completedtask, deletetask }) {
    return(
      <div className= {completed ? 'task-container completed' : 'task-container'}  >
        <div className='task-text' onClick={() => completedtask(id)}>
          {text}
        </div>
        <div className='task-icons-container' onClick={() => deletetask(id)}>
          <AiOutlineCloseCircle className='task-icon'/>
        </div>
      </div>

    );
}

export default Task;
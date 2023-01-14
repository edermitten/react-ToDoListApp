import './App.css';
import  freecodecamplogo from './images/logo.png'
import TaskForm from './components/TaskForm'


function App() {
  return (
    <div className="todolist-app">
      <div className='freecodecamp-logo-container'>
        <img src={freecodecamplogo} className='freecodecamp-logo' />
      </div>
      <div className='todolist-main'>
        <h1>To Do List</h1>
        <TaskForm/>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import  freecodecamplogo from './images/logo.png'
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div className="todolist-app">
      <div className='freecodecamp-logo-container'>
        <img src={freecodecamplogo} className='freecodecamp-logo' />
      </div>
      <div className='todolist-main'>
        <h1>My List</h1>
        <ToDoList/>
      </div>

    </div>
  );
}

export default App;

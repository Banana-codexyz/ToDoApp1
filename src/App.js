import './App.css';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';

function App() {

  
  const [toDoList, setToDoList] = useState([]);

  function fetchToDoHandler() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const toDoList = data.map((toDo) => {
          return {
            useId: toDo.completed,
            id: toDo.id,
            title: toDo.title,
            completed: toDo.completed
          };
        });
        setToDoList(toDoList);
      });
  }

  useEffect(fetchToDoHandler,[]);

  return (
    <div>
      <button style={{ width:150,height:40,margin:30 }}>Add To Do</button>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;

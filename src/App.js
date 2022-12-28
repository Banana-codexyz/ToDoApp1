import './App.css';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddToDo from './components/AddToDo';

function App() {


  const [toDoList, setToDoList] = useState([]);

  const [isToDoList, setIsToDoList] = useState(true);

  const addToDoHandler = (id, userId, title, completed) => {
    setToDoList((prev) => {
      const updatedToDos = [...prev];
      updatedToDos.unshift({ id: id, userId: userId, title: title, completed: completed });
      return updatedToDos;
    });
  };


  const switchPageAdd = () => {
    setIsToDoList(false);
  }

  const fetchToDoHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const toDoList = data.slice(0, 10).map((toDo) => {
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

  useEffect(fetchToDoHandler, []);

  return (
    <main>
      {isToDoList && <ToDoList onAdd={switchPageAdd} toDoList={toDoList} />}
      {!isToDoList && <AddToDo />}
    </main>
  );
}

export default App;

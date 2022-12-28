import './App.css';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';
import AddToDo from './components/AddToDo';

function App() {


  const [toDoList, setToDoList] = useState([]);

  const [isToDoList, setIsToDoList] = useState(true);

  

  const addToDoHandler = (toDo) => {
    setToDoList((prev) => {
      const updatedToDos = [...prev];
      updatedToDos.unshift(toDo);
      return updatedToDos;
    });
    setIsToDoList(true);
  };

  const deleteToDoHandler = (id) => {
    setToDoList((prev) => {
      const updatedToDos = prev.filter((toDo) => toDo.id !==  id);
      return updatedToDos;
    })
  }

  const updateToDoHandler = (updateToDo) => {
    setToDoList((prev) => {
      const toDoList = prev.map((toDo) => {
        if(toDo.id === updateToDo.id){
          toDo.userId = updateToDo.userId;
          toDo.title = updateToDo.title;
          toDo.completed = updateToDo.completed;
        }
        return toDo;
      })
      return toDoList;
    })
  }


  const switchPageAdd = () => {
    setIsToDoList(false);
  }

  const fetchToDoHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const toDoList = data.slice(0, 10).sort((a, b) => (a.title > b.title) ? 1 : -1).map((toDo) => {
          return {
            userId: toDo.userId,
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
      {isToDoList && <ToDoList onUpdateToDo={updateToDoHandler} onDeleteToDo={deleteToDoHandler} onAdd={switchPageAdd} toDoList={toDoList} />}
      {!isToDoList && <AddToDo onAdd={addToDoHandler} toDoList={toDoList}/>}
    </main>
  );
}

export default App;

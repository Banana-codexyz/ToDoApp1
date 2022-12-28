import { useState } from "react";
import ToDo from "./ToDo";
import UpdateToDo from "./UpdateToDo";

const ToDoList = (props) => {

    const [showUpdateForm,setShowUpdateForm] = useState(false);

    return (
        <ul>
            <button onClick={props.onAdd} style={{ width: 120, height: 40 }}>Add To Do</button>
            <br></br>
            
            <h2 style={{ color: 'red' }}>To do</h2>
            {props.toDoList.filter(a => a.completed === false).map((toDo) => (
                <ToDo key={toDo.id}
                    id = {toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                    onDelete={props.onDeleteToDo}
                    
                />
            ))}
            <h2 style={{ color: 'green' }}>Done</h2>
            {props.toDoList.filter(a => a.completed === true).map((toDo) => (
                <ToDo key={toDo.id}
                    id = {toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                    onDelete={props.onDeleteToDo}
                />
            ))}
            
            {showUpdateForm && <UpdateToDo/>}
        </ul>
    );
}

export default ToDoList;
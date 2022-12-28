import { useState } from "react";
import ToDo from "./ToDo";
import UpdateToDo from "./UpdateToDo";

const ToDoList = (props) => {

    const [showUpdateForm,setShowUpdateForm] = useState(false);

    const [updateToDo,setUpdateToDo] = useState({});

    const showUpdateFormHandle = (id) => {
        console.log("id:",id);
        setShowUpdateForm(!showUpdateForm);
        setUpdateToDo(() => {
            const toDo = props.toDoList.find(x => x.id === id);
            console.log(toDo);
            return toDo;
        } );
    }

    const submitUpdate = (toDo) => {
        setShowUpdateForm(false);
        props.onUpdateToDo(toDo);
    }

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
                    onUpdate={showUpdateFormHandle}
                />
            ))}
            <h2 style={{ color: 'green' }}>Done</h2>
            {props.toDoList.filter(a => a.completed === true).map((toDo) => (
                <ToDo key={toDo.id}
                    id = {toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                    onDelete={props.onDeleteToDo}
                    onUpdate={showUpdateFormHandle}
                />
            ))}
            
            {showUpdateForm && <UpdateToDo updateToDo={updateToDo} submitUpdate={submitUpdate} />}
        </ul>
    );
}

export default ToDoList;
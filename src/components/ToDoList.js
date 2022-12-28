import ToDo from "./ToDo";

const ToDoList = (props) => {
    return (
        <ul>
            <button onClick={props.onAdd} style={{ width: 120, height: 40 }}>Add To Do</button>
            <h3>To do</h3>
            {props.toDoList.filter(a => a.completed === false).sort((a, b) => (a.title > b.title) ? 1 : -1).map((toDo) => (
                <ToDo key={toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                />
            ))}
            <h3>Done</h3>
            {props.toDoList.filter(a => a.completed === true).sort((a, b) => (a.title > b.title) ? 1 : -1).map((toDo) => (
                <ToDo key={toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
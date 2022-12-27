import ToDo from "./ToDo";

const ToDoList = (props) => {
    return (
        <ul>
            <span>To do</span>
            {props.toDoList.filter(a => a.completed === false).slice(0,5).sort((a,b) => (a.title > b.title) ? 1: -1).map((toDo) => (
                <ToDo key={toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                />
            ))}
            <span>Done</span>
            {props.toDoList.filter(a => a.completed === true).slice(0,5).sort((a,b) => (a.title > b.title) ? 1: -1).map((toDo) => (
                <ToDo key={toDo.id}
                    title={toDo.title}
                    completed={toDo.completed}
                />
            ))}
        </ul>
    );
}

export default ToDoList;
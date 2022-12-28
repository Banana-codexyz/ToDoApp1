import { useState } from "react";

const UpdateToDo = (props) => {

    const [id, setId] = useState(props.updateToDo.id);
    const [userId, setUserId] = useState(props.updateToDo.userId);
    const [title, setTitle] = useState(props.updateToDo.title);
    const [completed, setCompleted] = useState(props.updateToDo.completed);

    const userIdValid = userId !== '';
    const titleValid = title !== '';
    

    let formIsValid = false;

    if(userIdValid && titleValid){
        formIsValid = true;
    }

    const userIdInputChangeHandler = (event) => {
        setUserId(event.target.value);
    };

    const titleInputChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const completedInputChangeHandler = (event) => {
        setCompleted(event.target.value);
    };


    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(completed);
        const toDo = {id: Number(id), userId: Number(userId), title: title, completed: JSON.parse(completed)};
        console.log("toDo",toDo);
        props.submitUpdate(toDo);

    };
    return (
        <div>
        <h2 style={{ color: 'blue' }}>Update</h2>
        <form onSubmit={formSubmitHandler}>
            <div>
                <span>Id</span>
                <input readOnly value={id} type="number"/>
            </div>
            <div>
                <span>UserId</span>
                <input value={userId} type="number" onChange={userIdInputChangeHandler}/>
            </div>
            <div>
                <span>Title</span>
                <input value={title} type="text" onChange={titleInputChangeHandler}/>
            </div>
            <div>
                <span>Completed</span>
                <select value={completed} onChange={completedInputChangeHandler} >   
                    <option value={false} selected={completed === false}>False</option>
                    <option value={true} selected={completed === true}>True</option>
                </select>
            </div>
            <button disabled={!formIsValid} type="submit">Update</button>
        </form>
        </div>
    )
}

export default UpdateToDo;
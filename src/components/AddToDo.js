import { useState } from "react";

const AddToDo = (props) => {

    const [id, setId] = useState('');
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState('false');

    const isDupdicateId = (id) => {
        const a = true;
        props.toDoList.map(x => {
            if(x.id === id){
                a = false;
            }
        })
       return a;
    };

    let idValid = (id !== '') && isDupdicateId(id);
    const userIdValid = userId !== '';
    const titleValid = title !== '';
    
    

    let formIsValid = false;

    if(idValid && userIdValid && titleValid){
        formIsValid = true;
    }


    const idInputChangeHandler = (event) => {
        setId(event.target.value);
    };

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
        const toDo = {id: Number(id), userId: Number(userId), title: title, completed: JSON.parse(completed)};
        console.log(toDo);
        props.onAdd(toDo);

    };
    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <span>Id</span>
                <input type="number" onChange={idInputChangeHandler} />
            </div>
            <div>
                <span>UserId</span>
                <input type="number" onChange={userIdInputChangeHandler}/>
            </div>
            <div>
                <span>Title</span>
                <input type="text" onChange={titleInputChangeHandler}/>
            </div>
            <div>
                <span>Completed</span>
                <select onChange={completedInputChangeHandler} >   
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                </select>
            </div>
            <button disabled={!formIsValid} type="submit">Add to do</button>
        </form>
    )
}

export default AddToDo;
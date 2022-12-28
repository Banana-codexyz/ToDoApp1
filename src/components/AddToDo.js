

const AddToDo = () => {
    const formSubmitHandler = (event) => {
        event.preventDefault();

    };
    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <span>Id</span>
                <input />
            </div>
            <div>
                <span>UserId</span>
                <input />
            </div>
            <div>
                <span>Title</span>
                <input />
            </div>
            <div>
                <span>Completed</span>
                <input />
            </div>
            <button type="submit">Add to do</button>
        </form>
    )
}

export default AddToDo;
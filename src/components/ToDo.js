const ToDo = (props) => {
    const deleteHandler = () => {
      props.onDelete(props.id);
    }

    const updateHandler = () => {
      console.log('updatedId:',props.id);
      props.onUpdate(props.id);
    }

    return (
      <li>
        {/* <span>{props.id}</span> */}
        <input type="text" value={props.title} size="50" readOnly/>
        {/* <span>{props.title}</span> */}
        <button onClick={updateHandler}>Sửa</button>
        <button onClick={deleteHandler}>Xóa</button>
      </li>
    );
  };
  
  export default ToDo;
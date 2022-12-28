const ToDo = (props) => {
    const deleteHandler = () => {
      console.log('deleteId:',props.id);
      props.onDelete(props.id);
    }

    return (
      <li>
        <input type="text" value={props.title} size="50"/>
        {/* <span>{props.title}</span> */}
        <button>Sửa</button>
        <button onClick={deleteHandler}>Xóa</button>
      </li>
    );
  };
  
  export default ToDo;
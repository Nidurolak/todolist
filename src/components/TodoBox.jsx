import TodoButton from './TodoButton';

function ShowToDo(props){
    const buttonString = props.todo.isComplete == false ?"완료" :"취소"
    return(
      <div className="todobox">
        <h2>{props.todo.todoName}</h2>
        <div>{props.todo.todoContents}</div>
        <div className="todobuttoncontainer">
          <button className="todoboxcompleteordelete" onClick={() => props.completeOrUndoToDo(props.todo.id)}><b>{buttonString}</b></button>
          <TodoButton {...props} />
        </div>
      </div>
    )}
  
    export default ShowToDo
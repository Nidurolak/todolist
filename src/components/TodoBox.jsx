import { Link } from 'react-router-dom';
import TodoButton from './TodoButton';

function ShowToDo(props){
    const buttonString = props.todo.isComplete == false ?"완료" :"취소"
    const linkId = `/sangsae/${props.todo.id}`
    return(
      <div className="todobox">
        <div className='submitbutton'><Link to={linkId}>상세보기</Link></div>
        <h2>{props.todo.todoName}</h2>
        <div>{props.todo.todoContents}</div>
        <div className="todobuttoncontainer">
          <button className="todoboxcompleteordelete" onClick={() => props.completeOrUndoToDo(props.todo.id)}><b>{buttonString}</b></button>
          <TodoButton {...props} />
        </div>
      </div>
    )}
  
    export default ShowToDo
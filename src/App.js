import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, useNavigate, } from 'react-router-dom';
import './App.css';
import ShowToDo from './components/TodoBox';
import { addTodo,deleteTodo, toggleStatusTodo } from './redux/modules/todo';
import Router from './shared/Router';

function App() {

  return <Router />
  
  /*
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo.todos)
  const[todoName, setName] = useState('')
  const[todoContents, setComment] = useState('')
  const[isComplete, setIscomplete] = useState(false)

  const addTodoList = () =>{
    if(todoName != '' && todoContents != ''){
      console.log(todo[1])
    dispatch(addTodo({
      id: todo[todo.length -1].id + 1,
      todoName,
      todoContents,
      isComplete: false}))
    }setName('')
    setComment('')
  }
  

  const nameChangeHandler = (event) =>{
    if(event.target.value !=''){
      setName(event.target.value)
    }
  }
  const commentChangeHandler = (event) =>{
    if(event.target.value != ''){
      setComment(event.target.value)
    }
    
  }
  const completeOrUndoToDo = (id) => {
    dispatch(toggleStatusTodo(id)) 
  }
  const todoDelete = (id) =>{
    dispatch(deleteTodo(id))
    console.log(todo)
  }

  return (<>
  <Router />
  <BrowserRouter>
    <div className='defaultlayout'>
      <div className='titlecontainer'>
        <div className="title">해야 할 일 목록</div>
        <div className="title">React</div>
      </div>
      <div className='titlecontainer'>
        <div className = "submitwrapper">
        <div className="submitbox">
        제목  <input value={todoName} onChange={nameChangeHandler}/>
        </div>
        <div className="submitbox">
        내용  <input value={todoContents} onChange={commentChangeHandler}/>
        </div>
        </div>
        <button className='submitbutton' onClick={addTodoList}>
          
          <b>기록하기</b></button>
      </div>
      <div className='todocontainer'>
        <div><h2>하는 중......</h2></div>
        <div className="todoboxcontainer">
          {todo.filter((list) => list.isComplete === false).map((list) =>
          { return(<ShowToDo key = {list.id} todo={list} completeOrUndoToDo = {completeOrUndoToDo} todoDelete ={todoDelete}/>)})}
        </div>
        
        <div><h2>끝난 것!</h2></div>
        <div className="todoboxcontainer">
          
          {todo.filter((list) => list.isComplete === true).map((list) =>
          { return(<ShowToDo key = {list.id} todo={list} completeOrUndoToDo = {completeOrUndoToDo} todoDelete ={todoDelete}/>)})}
        </div>
      </div>
    </div>
  </BrowserRouter>

  </>);*/
  
}

export default App;

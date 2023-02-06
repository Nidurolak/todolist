import { useState } from 'react';
import './App.css';
// className='container'


function ShowToDo(props){
  const buttonString = props.todo.isComplete == false ?"완료" :"취소"
  return(
    <div className="todobox">
      <h2>{props.todo.todoName}</h2>
      <div>{props.todo.todoContents}</div>
      <div className="todobuttoncontainer">
        <button className="todoboxcompleteordelete" onClick={() => props.completeOrUndoToDo(props.todo.id)}><b>{buttonString}</b></button>
        <button className="todoboxcompleteordelete" onClick={() => props.todoDelete(props.todo.id)}><b>삭제하기</b></button>
      </div>
    </div>
  )}

function App() {

  const [todo, setTodo] = useState([
    {id: 0, todoName: '첫 번째 할 일', todoContents: '리액트 완성', isComplete: false},
    {id: 1, todoName: '두 번째 할 일', todoContents: '임창정 소주한잔 완창하기', isComplete: false},
    {id: 2, todoName: '세 번째 할 일', todoContents: '뭐하지', isComplete: true},
  ])
  const[todoName, setName] = useState('')
  const[todoContents, setComment] = useState('')
  const[isComplete, setIscomplete] = useState(false)

  const addTodoList = () =>{
    if(todoName != '' && todoContents != ''){
      const newTodo = {
        id : todo[todo.length -1].id + 1,
        todoName : todoName,
        todoContents : todoContents,
        isComplete : false
      }
      setTodo([...todo, newTodo])
      setName('')
      setComment('')
    }
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
    //const newTodo = todo.map((list) => {if(list.id == id){list.isComplete ==false ?list.isComplete = true :list.isComplete = false}})
    //console.log(newTodo)
    //인덱스값이 id가 아니라 id값을 가진 인덱스를 찾아야해
    //const bool = todo[todo.find(index => index.id == id)].isComplete == true ?todo[id].isComplete = false :todo[id].isComplete = true;
    const ID =todo.find(index => index.id == id)
    const bool = ID.isComplete == true ?ID.isComplete = false :ID.isComplete = true;
    const newTodo = {...todo};
    ID.isComplete = bool;
    setIscomplete(() => {
      return newTodo
    })
    //이렇게 하지 말고 셋 스테이트 밖에 스프레드 문법을 써라
      /*if(todo[id].isComplete === false){
        console.log( 'affafa')
        todo[id].isComplete = true
        console.log(todo[id])
      }
      else{
        console.log("zzzzzz")
        todo[id].isComplete = false
        console.log(todo[id])
      }*/
      //setTodo([...todo, null])
  }

  const todoDelete = (id) =>{
    const newTodo = todo.filter((todo) => todo.id !== id)
    setTodo(newTodo)
  }

  return (<>
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
  </>);
}

export default App;

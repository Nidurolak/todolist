import { useState } from 'react';
import './App.css';
// className='container'


function ShowToDo(props){
  return(
    <div className="todobox">
      <h2>{props.name}</h2>
      <div>{props.comment}</div>
      <div className="todobuttoncontainer">
        <button className="todoboxcompleteordelete"><b>완료</b></button>
        <button className="todoboxcompleteordelete"><b>삭제</b></button>
      </div>
    </div>
  )}

function App() {

  const [todo, settodo] = useState([
    {id: 0, name: '첫 번째 할일', comment: '리액트 완성', iscomplite: false},
    {id: 0, name: '첫 번째 할일', comment: '리액트 완성', iscomplite: false},
    {id: 0, name: '첫 번째 할일', comment: '리액트 완성', iscomplite: false},

  ])


  return (<>
    <div className='defaultlayout'>
      <div className='titlecontainer'>
        <div className="title">해야 할 일 목록</div>
        <div className="title">React</div>
      </div>
      <div className='titlecontainer'>
        <div className = "submitwrapper">
        <div className="submitbox">
        제목  <input />
        </div>
        <div className="submitbox">
        내용  <input />
        </div>
        </div>
        <button className='submitbutton'><b>기록하기</b></button>
      </div>
      <div className='todocontainer'>
        <div><h2>하는 중......</h2></div>
        <div className="todoboxcontainer">
          {todo.map((list) => { return(ShowToDo(list))})}
        </div>
        
        <div><h2>끝난 것!</h2></div>
        <div className="todoboxcontainer">
          <div className="todobox">
            <h2>하는 중</h2>
            <div>asdasddasadsaasadsadadda</div>
            <div className="todobuttoncontainer">
              <button className={"todoboxcompleteordelete"}>완료</button>
              <button className={"todoboxcompleteordelete"}>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default App;

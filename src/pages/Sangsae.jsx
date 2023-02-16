import React from "react";
import { useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import '../App.css';

/*
todoName: '첫 번째 할 일',
todoContents: '리액트 완성',
isComplete: false
*/
const Sangsae = () => {
    const param = useParams()
    const todo = useSelector((state) => state.todo.todos).find(index => index.id == param.id)

    console.log(todo)
    return (<>
        <div className="sangsaecontainer">
            <div className="sangsaeBox">
                <div className="todobuttoncontainer">
                <div> Id : {param.id}</div>
                <div className='submitbutton'><Link to= '/'>이전으로</Link></div>
                </div>
        <h2>{todo.todoName}</h2>
        <div>{todo.todoContents}</div>
            </div>
        </div>

    </>)
}

export default Sangsae
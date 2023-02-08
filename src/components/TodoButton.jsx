function TodoButton(props) {
    return (
        <button className="todoboxcompleteordelete" onClick={() => props.todoDelete(props.todo.id)}><b>삭제하기</b></button>
    )
}

export default TodoButton
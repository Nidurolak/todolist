const add_Todo = "add_Todo"
const delete_Todo = "delete_Todo"
const toggle_StatusTodo = "toggleStatus_Todo"
const get_TodoId = "get_TodoId"

export const addTodo = (payload) => {
    return {
        type: add_Todo,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: delete_Todo,
        payload
    }
}

export const toggleStatusTodo = (payload) =>{
    return{
        type: toggle_StatusTodo,
        payload
    }
}

const initialState = {
    todos: [
        {
            id: 0,
            todoName: '첫 번째 할 일',
            todoContents: '리액트 완성',
            isComplete: false
        },
        {
            id: 1,
            todoName: '점심 피자먹기',
            todoContents: '페퍼로니 피자로',
            isComplete: false
        },
        {
            id: 2,
            todoName: '저녁으로 방어회먹기',
            todoContents: '방어(막기)아님',
            isComplete: false
        },
    ]
}

const todo = (state = initialState, action) => {
    console.log(state + "addas")
    console.log(action.payload)
    switch (action.type) {
        case add_Todo:
            console.log(action.payload)
            const newTodo = {
                id: state.todos[state.todos.length - 1].id + 1,
                todoName: action.payload.todoName,
                todoContents: action.payload.todoContents,
                isComplete: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case delete_Todo:
            console.log(action.payload)
            console.log(state.todos[action.payload] + 'adasdasdsad')
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != action.payload)
            }
        case toggle_StatusTodo:
            const ID = state.todos.find(index => index.id == action.payload)
            console.log(ID.isComplete + "asadsadsaffggg")
            const bool = ID.isComplete == true ?ID.isComplete = false :ID.isComplete =true;
            console.log(bool)
            /*newTodo = {...state.todos}
            ID.isComplete = bool;*/
            
            return {
                ...state,
                todos: [...state.todos]}
            // newTodo
        case get_TodoId:
            return state

        default:
            return state
    }
}

export default todo;
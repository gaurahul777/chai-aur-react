import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
     todos:[{id:1,text:"hello world"}]
}
 
export const todoSlice = createSlice({
    name: 'todo',
    initialState,//chhao to yha bhi ker sakte to define
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id===action.payload.id) todo.text=action.payload.text
            })
        }
        
    }
})

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions

export default todoSlice.reducer
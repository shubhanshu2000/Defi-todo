import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

export interface Todo{
  id: string
  title: string
  description: string
  isDone: boolean
} 
interface TodoList {
  id: string
  todos: Todo[]
}


const initialState: TodoList = {
  id: "",
  todos: []
}

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<Todo>)=>{
      state.todos.push({
        id: `${state.todos.length}`,
        title: action.payload.title,
        description: action.payload.description,
        isDone: action.payload.isDone
      })
    }
  }
})

export default TodoSlice.reducer;
export const {addTodo} = TodoSlice.actions
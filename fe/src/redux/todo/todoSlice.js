import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodoList: (state, action) => {
            state.todoList = action.payload
        },
        addTodoToList: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
})
const { actions, reducer } = todoSlice;
export const { setTodoList, addTodoToList } = actions;
export default reducer;
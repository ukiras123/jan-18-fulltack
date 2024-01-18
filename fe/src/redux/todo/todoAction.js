import { toast } from "react-toastify"
import { addTodoToList, setTodoList } from "./todoSlice"
import axios from "axios"

const BASE_URL = 'http://localhost:3000'
const TODO_PATH = `${BASE_URL}/api/v1/todo/`
// CRUD
export const addToTODOAction = (todo) => async dispatch => {
    try {
        // Call DB to Add
        const { data } = await axios.post(TODO_PATH, { todo })
        // Fetch new items from DB and update state
        dispatch(getAllToDosAction())
        toast.success("Success");

    } catch (e) {
        console.log(e)
        toast.error("SOmething went wrong")
    }
}

export const getAllToDosAction = () => async dispatch => {
    try {
        // Call DB to Add
        // Fetch new items from DB and update state
        const { data } = await axios.get(TODO_PATH)
        dispatch(setTodoList(data))
    } catch (e) {
        console.log(e)
        toast.error("SOmething went wrong")
    }
}

export const updateTodoAction = (id, todo) => async dispatch => {
    try {
        // Call DB to Add
        // Fetch new items from DB and update state
        await axios.put(TODO_PATH + id, {todo})
        dispatch(getAllToDosAction())
        toast.success("Success");
    } catch (e) {
        console.log(e)
        toast.error("SOmething went wrong")
    }
}

export const deleteTodoAction = (id) => async dispatch => {
    try {
        // Call DB to Add
        // Fetch new items from DB and update state
        await axios.delete(TODO_PATH + id)
        dispatch(getAllToDosAction())
        toast.success("Success");
    } catch (e) {
        console.log(e)
        toast.error("SOmething went wrong")
    }
}
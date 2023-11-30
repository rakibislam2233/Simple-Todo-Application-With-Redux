import { combineReducers } from "redux"
import todoReducer from "./todo/todoReducer"
import filterReducer from "./filter/filterReducer"
const rootReducer = (combineReducers({
    todos: todoReducer,
    filter: filterReducer

}))
export default rootReducer
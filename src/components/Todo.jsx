import { useSelector } from "react-redux"
import TodoList from "./TodoList"

const Todo = () => {
  const todos = useSelector(state => state.todos)

    return (
    <div className="px-2 py-5">
      {
        todos.map((todo,i)=><TodoList key={i} todo={todo}/>)
      }
    </div>
  )
}

export default Todo

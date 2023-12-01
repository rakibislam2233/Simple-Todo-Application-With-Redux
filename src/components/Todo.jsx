import { useSelector } from "react-redux"
import TodoList from "./TodoList"

const Todo = () => {
  const todos = useSelector(state =>state.todos)
  const filter = useSelector(state => state.filter)

  return (
    <div className="px-2 py-5">
      {
       todos.filter((todo) =>{
        const {status} = filter;
        if(status === 'complete'){
          return todo.completed
        }else if(status === 'incomplete'){
          return !todo.completed
        }else{
          return true
        }
       })
       .filter(todo =>{
        const {colors} = filter
        if(colors.length > 0){
          return colors.includes(todo?.color)
        }else{
          return true
        }
       })
       .map((todo,i)=><TodoList key={i} todo={todo}/>)
      }
    </div>
  )
}

export default Todo

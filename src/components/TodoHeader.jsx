import todoTask from "../assets/image/todoTask.png";
import add from "../assets/image/add.png";
import { useDispatch } from "react-redux";
import { added, clearCompleted, completedTask } from "../redux/todo/action";
const TodoHeader = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target;
   const todoText = form.text.value;
   dispatch(added(todoText))
  }
  return (
    <>
      <div className="w-full flex  justify-between items-center  bg-gray-50 rounded-xl gap-2 p-2 text-gray-500">
        <img className="w-8 h-8" src={todoTask} alt="todoTask Image" />
        <form onSubmit={handleSubmit} className="w-full flex gap-1">
          <input
            type="text"
            name="text"
            id="text"
            className="w-full px-3 py-2 outline-none bg-transparent text-xl"
            placeholder="Type your todo"
            required
          />
        <button>
          <img className="w-8 h-8 mx-auto" src={add} alt="todoTask Image" />
        </button>
        </form>
      </div>
      <div className="flex justify-between items-center p-2 my-2 text-gray-500">
        <button onClick={()=>dispatch(completedTask())} >Complete All Task</button>
        <button onClick={()=>dispatch(clearCompleted())}>Clear Completed</button>
      </div>
      <hr />
    </>
  );
};

export default TodoHeader;

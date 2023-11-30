import todoTask from "../assets/image/todoTask.png";
import add from "../assets/image/add.png";
import check from "../assets/image/read.png";
import { useDispatch, useSelector } from "react-redux";
import { added, clearCompletedTask, completedTask } from "../redux/todo/Action";
const TodoHeader = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const todoText = form.todoText.value;
    const todo = {todoText}
    dispatch(added(todo));
    form.reset()
  };
  return (
    <>
      <div className="w-full flex  justify-between items-center  bg-gray-50 rounded-xl gap-2 p-2 text-gray-500">
        <img className="w-8 h-8" src={todoTask} alt="todoTask Image" />
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            type="text"
            name="todoText"
            id="todoText"
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
        <button onClick={()=>dispatch(completedTask())} className="flex justify-center items-center">
          <img className="w-5 h-5" src={check} alt="todoTask Image" /> Complete
          All Task
        </button>
        <button onClick={()=>dispatch(clearCompletedTask())}>Clear Completed</button>
      </div>
      <hr />
    </>
  );
};

export default TodoHeader;

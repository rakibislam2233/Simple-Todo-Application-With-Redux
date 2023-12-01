import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/action";

const TodoFooter = () => {
  const todos = useSelector(state=>state.todos)
  const taskLeft = todos.filter(todo=>todo.completed !== true);
  const filter = useSelector(state=>state.filter)
  console.log(filter.colors)
  const dispatch = useDispatch()
  const number_of_todos = (number)=>{
    switch (number) {
      case 0:
        return 'No task left'
      case 1 :
        return '1 task left'
      default:
        return `${number} tasks left`;
    }
  }
  const handleColorChange = (color)=>{
    if(filter.colors.includes(color)){
      dispatch(colorChanged(color,'removed'))
    }else{
      dispatch(colorChanged(color, 'added'))
    }
  }
  return (
    <div className="flex justify-between items-center gap-5 p-2 text-gray-500 flex-wrap">
      <h3>{number_of_todos(taskLeft.length)}</h3>
      <div className="flex gap-3 items-center">
        <ul className="flex gap-1 items-center">
          <li onClick={()=>dispatch(statusChanged('all'))} className={`cursor-pointer ${filter.status === 'all' && 'font-semibold'}`}>All</li>
          <li>|</li>
          <li onClick={()=>dispatch(statusChanged('incomplete'))} className={`cursor-pointer ${filter.status === 'incomplete' && 'font-semibold'}`}>Incomplete</li>
          <li>|</li>
          <li onClick={()=>dispatch(statusChanged('complete'))} className={`cursor-pointer ${filter.status === 'complete' && 'font-semibold'}`}>Complete</li>
        </ul>
        <div className="flex gap-4">
          <div onClick={()=>handleColorChange('green')} className={`w-3 h-3 rounded-full  ring-2 ring-green-500 cursor-pointer ${filter.colors.includes('green') && 'bg-green-500'}`}></div>
          <div onClick={()=>handleColorChange('yellow')} className={`w-3 h-3 rounded-full  ring-2 ring-yellow-500 cursor-pointer ${filter.colors.includes('yellow') && 'bg-yellow-500'}`}></div>
          <div onClick={()=>handleColorChange('red')} className={`w-3 h-3 rounded-full  ring-2 ring-red-500 cursor-pointer ${filter.colors.includes('red') && 'bg-red-500'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;

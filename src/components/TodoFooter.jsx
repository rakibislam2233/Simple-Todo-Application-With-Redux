import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filter/action";

const TodoFooter = () => {
  const filter = useSelector(state=>state.filter)
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between items-center gap-5 p-2 text-gray-500 flex-wrap">
      <h3>2 Task Left</h3>
      <div className="flex gap-3 items-center">
        <ul className="flex gap-1 items-center">
          <li onClick={()=>dispatch(statusChanged('all'))} className={`cursor-pointer ${filter.status === 'all' && 'font-semibold'}`}>All</li>
          <li>|</li>
          <li onClick={()=>dispatch(statusChanged('incomplete'))} className={`cursor-pointer ${filter.status === 'incomplete' && 'font-semibold'}`}>Incomplete</li>
          <li>|</li>
          <li onClick={()=>dispatch(statusChanged('complete'))} className={`cursor-pointer ${filter.status === 'complete' && 'font-semibold'}`}>Complete</li>
        </ul>
        <div className="flex gap-4">
          <div className="w-3 h-3 rounded-full  ring-2 ring-green-500 cursor-pointer bg-green-500"></div>
          <div className="w-3 h-3 rounded-full  ring-2 ring-yellow-500 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full  ring-2 ring-red-500 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;

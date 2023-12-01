/* eslint-disable react/prop-types */
import cross from "../assets/image/cross.png";
import check from "../assets/image/check.png";
import { useDispatch } from "react-redux";
import { colorSelected, deleted, toggled } from "../redux/todo/action";
const TodoList = ({ todo }) => {
  const { id, todoText, completed, color } = todo;
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full flex  justify-between items-center gap-4 text-gray-500">
        <div className="flex items-center gap-5">
          {completed ? (
            <div onClick={() => dispatch(toggled(id))} className="cursor-pointer">
              <img className="w-5 h-5 mx-auto" src={check} alt="" />
            </div>
          ) : (
            <div
              onClick={() => dispatch(toggled(id))}
              className="w-5 h-5 mx-auto rounded-full  ring-2 ring-green-600 cursor-pointer"
            ></div>
          )}
          <h1 className="line-through">{todoText}</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div
            onClick={() => dispatch(colorSelected(id, "green"))}
            className={`w-3 h-3 rounded-full  ring-2 ring-green-500 cursor-pointer  ${
              color === "green" && "bg-green-500"
            }`}
          ></div>
          <div
            onClick={() => dispatch(colorSelected(id, "yellow"))}
            className={`w-3 h-3 rounded-full  ring-2 ring-yellow-500 cursor-pointer ${
              color === "yellow" && "bg-yellow-500"
            }`}
          ></div>
          <div  onClick={() => dispatch(colorSelected(id, "red"))} className={`w-3 h-3 rounded-full  ring-2 ring-red-500 cursor-pointer ${color ==='red' && 'bg-red-500'}`}></div>
          <button onClick={() => dispatch(deleted(id))}>
            <img className="w-5 h-5" src={cross} alt="" />
          </button>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default TodoList;

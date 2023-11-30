/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import cross from '../assets/image/cross.png'
import { colorSelected, deleted, toggled } from '../redux/todo/Action';
const TodoList = ({todo}) => {
  const {id,todoText,completed,color} = todo;
  const dispatch = useDispatch()
  return (
    <>
    <div className="w-full flex  justify-between items-center gap-4 text-gray-500">
      <div className="flex items-center gap-5">
        <div onClick={()=>dispatch(toggled(id))} >
          {
            completed ? <div className="w-4 h-4 rounded-full  ring-2 bg-green-500 ring-green-500 cursor-pointer"></div> :  <div className="w-4 h-4 rounded-full  ring-2 ring-green-500 cursor-pointer"></div>
          }
        </div>
        <h1 className="line-through">{todoText}</h1>
      </div>
      <div className="flex gap-4 items-center">
      <div onClick={()=>dispatch(colorSelected(id,'green'))} className={`w-3 h-3 rounded-full  ring-2 ring-green-500 cursor-pointer  hover:bg-green-500 ${color === 'green' && 'bg-green-500'}`}></div>
      <div onClick={()=>dispatch(colorSelected(id,'yellow'))} className={`w-3 h-3 rounded-full  ring-2 ring-yellow-500 cursor-pointer hover:bg-yellow-500 ${color==='yellow' && 'bg-yellow-500'}`}></div>
      <div onClick={()=>dispatch(colorSelected(id,'red'))} className={`w-3 h-3 rounded-full  ring-2 ring-red-500 cursor-pointer hover:bg-red-500 ${color==='red' && 'bg-red-500'}`}></div>
      <button onClick={()=>dispatch(deleted(id))} ><img  className='w-4 h-4' src={cross} alt="" /></button>
      </div>
    </div>
    <hr className='my-3' />
    </>
  )
}

export default TodoList

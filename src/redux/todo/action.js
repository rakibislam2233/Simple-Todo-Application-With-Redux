import { ADDED, CLEARCOMPLETED, COLORSELECTED, COMPLETEDTASK, DELETED, TOGGLED } from "./actionType"

export const added = (todoTask)=>{
    return{
        type: ADDED,
        payload: todoTask
    }
}
export const toggled = (todoId)=>{
    return{
        type: TOGGLED,
        payload: todoId
    }

}
export const colorSelected = (todoId,color)=>{
    return{
        type: COLORSELECTED,
        payload: {todoId,color}
    }
}
export const completedTask = ()=>{
    return{
        type: COMPLETEDTASK
    }
}
export const clearCompleted = ()=>{
    return{
        type: CLEARCOMPLETED
    }
}
export const deleted = (todoId)=>{
    return{
        type: DELETED,
        payload: todoId
    }
}
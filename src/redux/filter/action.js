import { COLORCHANGED, STATUSCHANGED } from "./actionType"

export const statusChanged = (status)=>{
    return {
        type: STATUSCHANGED,
        payload:status
    }
}
export const colorsChanged =(color,changedType)=>{
    return {
        type: COLORCHANGED,
        payload:{color,changedType}
    }
}
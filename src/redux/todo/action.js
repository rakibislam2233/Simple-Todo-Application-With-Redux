import {
  ADDED,
  CLEARCOMPLETED,
  COLORSELECTED,
  COMPLETEDTASK,
  DELETED,
  TOGGLED,
} from "./ationType";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: { todoId, color },
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const completedTask = () => {
  return {
    type: COMPLETEDTASK,
  };
};
export const clearCompletedTask = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

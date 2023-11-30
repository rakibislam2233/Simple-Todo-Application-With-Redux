import {
  ADDED,
  CLEARCOMPLETED,
  COLORSELECTED,
  COMPLETEDTASK,
  DELETED,
  TOGGLED,
} from "./ationType";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      if (state.length === 0) {
        return [
          ...state,
          {
            id: 1,
            ...action.payload,
          },
        ];
      } else {
        const lastElement = state.at(-1);
        return [
          ...state,
          {
            id: lastElement.id + 1,
            ...action.payload,
          },
        ];
      }
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    case COLORSELECTED:
      return state.map((todo) =>
        todo.id === action.payload.todoId
          ? { ...todo, color: action.payload.color }
          : todo
      );
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    case COMPLETEDTASK:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};
export default todoReducer;

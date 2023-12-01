import {
  ADDED,
  CLEARCOMPLETED,
  COLORSELECTED,
  COMPLETEDTASK,
  DELETED,
  TOGGLED,
} from "./actionType";
import initialState from "./initialState";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      if (state.length === 0) {
        return [
          ...state,
          {
            id: 1,
            todoText: action.payload,
          },
        ];
      } else {
        const lastElm = state.at(-1);
        return [
          ...state,
          {
            id: lastElm.id + 1,
            todoText: action.payload,
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
        }
        return todo;
      });
    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
        return todo;
      });
    case COMPLETEDTASK:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => todo.completed !== true);
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
export default todoReducer;

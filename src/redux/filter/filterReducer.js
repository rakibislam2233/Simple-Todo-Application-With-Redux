import { COLORCHANGED, STATUSCHANGED } from "./actionType";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      switch (action.payload.changeType) {
        case "added":
          return {
            ...state,
            color: [...state.color,action.payload.color],
          };
        case "removed":
            return {
              ...state,
                color: state.color.filter((item) => item!== action.payload.color),
              };

        default:
          return state;
      }
    default:
      return state;
  }
};
export default filterReducer;

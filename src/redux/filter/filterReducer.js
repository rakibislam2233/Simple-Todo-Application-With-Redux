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
            colors: [...state.colors, action.payload.color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== action.payload.color
            ),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};
export default filterReducer;

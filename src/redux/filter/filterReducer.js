import { STATUSCHANGED } from "./actionType";
import { initialState } from "./initialState";

const filterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case STATUSCHANGED:
            
            break;
    
        default:
            return state;
    }

}
export default filterReducer;
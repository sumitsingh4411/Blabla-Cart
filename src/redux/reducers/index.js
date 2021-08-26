import { combineReducers } from "redux";
import addtocart from './addtocart';
import choosecategory from './chooseCategory';


const rootReducer=new combineReducers({
    addtocart,
    choosecategory
})

export default rootReducer;
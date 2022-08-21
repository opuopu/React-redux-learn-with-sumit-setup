import { combineReducers } from "redux";
import counterReducer from "./counter/counterreducer";
import DynamicCounterReducer from "./Dynamic counter/DynamicCounterReducer";


const reducer = combineReducers({
    counter:counterReducer,
    Dcounter:DynamicCounterReducer
})

export default reducer
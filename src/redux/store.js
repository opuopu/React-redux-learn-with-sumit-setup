import { createStore ,applyMiddleware} from "redux";
import counterReducer from "./counter/counterreducer";
import reducer from "./Rootreducer";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"






 const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)))


 export default store
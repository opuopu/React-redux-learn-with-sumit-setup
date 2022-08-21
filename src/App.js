import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DynamicCounter from "./components/DynamicCounter";
import DynamicCounterReducer from "./redux/Dynamic counter/DynamicCounterReducer";
import store from "./redux/store";
import Total from './components/hookscounter/total'


export default function App() {

    return (
  <Provider store={store}>
          <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
           
      <Counter></Counter>
      <DynamicCounter></DynamicCounter>
      <Total></Total>
      {/* <VariableCounter dynamic={true}/> */}


            </div>
        </div>
  </Provider>
    );
}

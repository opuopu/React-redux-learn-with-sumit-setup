import { connect ,useSelector} from "react-redux";




 function Total() {
    // useselector return state i mean counter reducers intial state
const count =  useSelector((state)=>state.counter.totalValue);

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {<div className="text-2xl font-semibold">{count}</div>}
            <div className="flex space-x-3">
            </div>
        </div>
    );
}
export default Total

// connect() eita ekta higher order function thats return a new component


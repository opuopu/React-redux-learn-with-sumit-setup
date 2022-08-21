import { connect ,useSelector} from "react-redux";




 function Hookscounter() {
    // useselector return state i mean counter reducers intial state
const count =  useSelector((state)=>state.value);

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {<div className="text-2xl font-semibold">{count}</div>}
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

// connect() eita ekta higher order function thats return a new component


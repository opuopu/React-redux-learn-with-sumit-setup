import { connect, useDispatch, useSelector } from "react-redux";
import { Ddecrement,Dincrement } from "../redux/Dynamic counter/DynamicAction";


 export default function DynamicCounter({id}) {

// useselector state take reserve kore.... eikhane state.value ta niye amra count er modde peye jabo.
const count = useSelector(state=>state.Dcounter.value)
const dispatch = useDispatch();

const Increment = (value) =>{
    dispatch(Dincrement(value))
}

const Decrement = (value) =>{
    dispatch(Ddecrement(value))
}
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {<div className="text-2xl font-semibold">{count}</div>}
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>Increment(4)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>Decrement(4)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

// const mapDispatchToProps = (dispatch) =>{
//     const values={id :5}
//     return {
//         increment:(value)=>dispatch(increment(values)),
//         decrement:(value)=>dispatch(decrement(value))
//     }
// }

// // 
// const mapStateToProps=(state,ownProps) =>{
//     console.log(ownProps)
//     return {
//         count:state.value,
       




//     }
// }

// connect() eita ekta higher order function thats return a new component
//  export default connect(mapStateToProps,mapDispatchToProps)(Counter)

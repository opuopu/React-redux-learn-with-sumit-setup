import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/action";
import {increment as dincrement,decrement as ddecrement} from '../../redux/Dynamic counter/DynamicAction'





function VariableCounter({id}) {

// useselector state take reserve kore.... eikhane state.value ta niye amra count er modde peye jabo.

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {<div className="text-2xl font-semibold">0</div>}
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment()}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={decrement()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch,ownProps) =>{

    return {
        increment:ownProps.dynamic ? (value)=>dispatch(dincrement(value)) : (value)=>dispatch(increment(value)),
        decrement: ownProps.dynamic ? (value)=>dispatch(ddecrement(value)) : (value)=>dispatch(decrement(value))
    }
}

// 
const mapStateToProps=(state,ownProps) =>{
 
    return {
        count:ownProps.dynamic ? state.Dcounter.value : state.counter.value
       




    }
}


 export default connect(mapStateToProps,mapDispatchToProps)(VariableCounter)

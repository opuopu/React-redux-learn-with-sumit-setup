import { DDECREMENT,DINCREMENT } from "./DactionCreator"

const initialstate ={
    value:0,
    reff:[
        {refference:1},
        {refference:2},
        {refference:2},
    ]
}


const DynamicCounterReducer =(state= initialstate,action)=>{

  console.log(action)

switch(action.type){
case DINCREMENT:
    return{
        ...state,
        value:state.value +action.payload
    }
    case DDECREMENT:
        return{
            ...state,
            value:state.value -action.payload
        }
        default:
            return state;

}
    
}

export default DynamicCounterReducer
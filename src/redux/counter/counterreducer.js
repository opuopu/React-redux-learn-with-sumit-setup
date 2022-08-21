import { DECREMENT, INCREMENT } from "./actionTypes"

const initialstate ={
    value:0,
  
    totalValue:0
 
}


const counterReducer =(state= initialstate,action)=>{

  console.log(action)

switch(action.type){
case INCREMENT:
    return{
        ...state,
        value:state.value +1,
        totalValue:state.totalValue + 20
    }
    case DECREMENT:
        return{
            ...state,
            value:state.value -1,
            totalValue:state.totalValue - 20
        }
        default:
            return state;

}
    
}

export default counterReducer
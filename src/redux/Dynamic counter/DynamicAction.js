
// action creatores
import { DDECREMENT,DINCREMENT } from "./DactionCreator"

export const Dincrement = (value) =>{
    return{
        type:DINCREMENT,
        payload:value
    }
}
export const Ddecrement = (value) =>{
    return{
        type:DDECREMENT,
        payload:value
    }
}

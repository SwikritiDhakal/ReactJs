import { useReducer } from "react";
import { useState } from "react";

function reducer(state, action){
if(action.type=="deposit"){
    return {...state, balance:state.balance + action.payload}
}

if(action.type=="withdraw"){
    return {...state,balance: state.balance - action.payload}
}
}


export default function Bank(){

      
const [state, dispatch]=useReducer(reducer, {balance: 0});
const [amount, setAmount]= useState(0);
    return (

        <div>
<input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>

<button onClick={()=>dispatch({type:"deposit",  payload:Number(amount)})}>Deposit</button>


<button onClick={()=>dispatch({type:"withdraw", payload:Number(amount)})}>Withdraw</button>
          {state.balance}
        </div>
    )
}
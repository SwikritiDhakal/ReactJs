import { useReducer, useState } from "react"

export default function UseReducerHookExample(){

    //it should take state and action 
    function reducer(state, action){
if(action.type=="increment"){
    return state+action.payload;
}else{
    return state-action.payload
}
    }

    const [count, setCount]=useState(0);

    //1. reducer func 2. initial state value
    //dispatch is the kind of an action which we dispatch when we change the value 
    const [state, dispatch]= useReducer(reducer,0)
    return(

        
        <div>
             useState{count}
        
<button onClick={()=>setCount(count+1)}>increment</button>
<button onClick={()=> setCount(count-1)}>decrement</button>


{/* dispatching action obj */}
   useReducer {state}
<button onClick={()=>dispatch({type:"increment", payload:2})}>Increment count</button>
<button onClick={()=>dispatch({type:"decrement",payload:1})}>Decrement count</button>

        </div> 
    )
}
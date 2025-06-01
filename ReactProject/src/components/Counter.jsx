//state is obj that holds data related to specificcomp
// using state we can dynamically change the data
//info that a comp can hold for a speccific time period
//state var is a pieceof state combined together to form comp state

import { useState } from "react";

//when val change the comp rerenders
export default function Counter(){
     const [count, setCount]= useState(0);
     const[incrementBy,setIncrementBy]= useState(1);

     function Increment(){
        setCount(count+ incrementBy);
     }
     function Decrement(){
        setCount(count-incrementBy);
     }

     function increaseIncrement(){
        setIncrementBy(incrementBy+1);
     }
     function decreaseDecrement(){
        setIncrementBy(incrementBy-1);
     }
    return ( 
        <div>
                <h1>Count value is: {count}</h1>
                <button onClick={Increment}> Add Count</button>
                <button onClick={Decrement}> decrease Count</button>
                
                <h1>We are incrementing by {incrementBy}</h1>
                <button onClick={increaseIncrement}> increment </button>
                <button onClick={decreaseDecrement}> decrement</button>
        </div>
    );
}
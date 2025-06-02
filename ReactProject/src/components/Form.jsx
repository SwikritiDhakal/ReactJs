import { useState } from "react";

export default function Form(){

    const [name, setName]=useState({firstname:"", lastname:""});

    function handleChange(e){
       setName(e.target.value);
    }
    return (
    <div>
        <input type="text" 
        // onChange={function demo(e){
        //     return handleChange(e);
        // } }
       // onChange={(e)=>handleChange(e)}
       onChange={(e)=>setName({firstname:e.target.value, lastname:""})}

          value={name.firstname}/>
        <input type="text" 
        // onChange={function demo(e){
        //     return handleChange(e);
        // } }
       // onChange={(e)=>handleChange(e)}
       onChange={(e)=>setName({firstname:"" ,lastname:e.target.value})}

          value={name.lastname}/>
    </div>
    );
}
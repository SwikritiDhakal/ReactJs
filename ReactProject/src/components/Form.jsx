import { useState } from "react";

export default function Form(){

    const [name, setName]=useState({firstname:"", lastname:""});


      function handleSubmit(e){
         e.preventDefault();
         console.log(name);
      }

   //  function handleChange(e){
   //     setName(e.target.value);
   //  }
    return (
    <div>
      {name.firstname}-{name.lastname}
      <form action="">
        <input type="text" 
        // onChange={function demo(e){
        //     return handleChange(e);
        // } }
       // onChange={(e)=>handleChange(e)}
       onChange={(e)=>setName({...name,firstname:e.target.value})}

          value={name.firstname}/>
        <input type="text" 
        // onChange={function demo(e){
        //     return handleChange(e);
        // } }
       // onChange={(e)=>handleChange(e)}
       onChange={(e)=>setName({...name,lastname:e.target.value})}

          value={name.lastname}/>

          <button onClick={(e)=>handleSubmit(e)}>Add</button>
          </form>
    </div> 
    );
}
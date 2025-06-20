import { useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export default function LoginHook(){

   

    const[value, setValue]= useState("")
    const [user, setUser] =useLocalStorage();


     function handleClick(){
        setUser(value);
    }


    return <div>

    <input onChange={(e)=>setValue(e.target.value)}  type="text" value={value}/>
<br /> <br />
    <button onClick={handleClick}>Login</button>
    </div>
}
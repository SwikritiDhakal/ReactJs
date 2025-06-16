import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
export default function HomePage(){
    const navigate= useNavigate();
const [username, setUsername]= useState("");

    function handleClick(){
        navigate('/dashboard/profile')

    }

    return <div>
        home
        <input type="text" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
<button onClick={handleClick}>Go to Profile</button>
    </div>
}
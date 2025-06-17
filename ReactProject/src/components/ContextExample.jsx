import { createContext, useState } from "react"
import Checkout from "./Checkout";


 export const userContext= createContext();


export default function ContextExample(){

    const [user, setUser]= useState("guest")

    return (

        <div>

        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} />

        <userContext.Provider value={{user}}>
                <Checkout/>
            </userContext.Provider>
                
        </div>
    )
}
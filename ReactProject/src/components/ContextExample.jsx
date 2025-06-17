import { createContext, useState } from "react"
import { UserProvider } from "../context/UserContext";
import Checkout from "./Checkout";
import Login from "./Login";
import Logout from "./Logout";






export default function ContextExample(){

 

    return (

        <div>


        <UserProvider>
                      <Login/>
                      <Logout/>
                <Checkout/>
               
         </UserProvider>
                
        </div>
    )
}
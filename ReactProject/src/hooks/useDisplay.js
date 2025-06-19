import { useState } from "react";

export default function useDisplay(){

    const [message, setMessage]=useState("custom hook")

    function displayMessage(){
      // return "custom hook message"
      console.log("msg from displaymsg ")
    }

    return [message,displayMessage]; 
}
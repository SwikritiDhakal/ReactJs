import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Logout() {
  const context = useContext(userContext);
  console.log("Logout Context:", context); // <---- Check this!

  if (!context) {
    return <p>⚠ Context is not available</p>;
  }

  const { dispatch } = context;

  return (
    <div>
      {/* <button onClick={() => setUser("guest")}>Logout</button> */}
      <button onClick={() => dispatch({type:"logout", payload:"guest"})}>Logout</button>
    </div>
  );
}

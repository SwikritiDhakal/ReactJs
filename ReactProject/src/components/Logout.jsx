import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Logout() {
  const context = useContext(userContext);
  console.log("Logout Context:", context); // <---- Check this!

  if (!context) {
    return <p>⚠ Context is not available</p>;
  }

  const { setUser } = context;

  return (
    <div>
      <button onClick={() => setUser("guest")}>Logout</button>
    </div>
  );
}

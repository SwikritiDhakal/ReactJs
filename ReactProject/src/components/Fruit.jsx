export default function Fruit({name,price,color}){
 return(
    <>
    
        {/* {name} {price} {color} */}

        {/* ...........ternary conditional rendering */}
        {price>200? 
        (
        <li >
        <h3>{name} {price} {color}</h3> 
        </li>)
        : ("")}

    
    </>
 );
} 
import Fruit from "./Fruit";
export default function Fruits(){

    //const fruits=['apple' ,'grapes', 'litchi'];
    const fruits=[
        {
            name:"apple",
            price:200,
            color:"red"
        } ,
        {
            name:"mango",
            price:300,
            color:"yellow"
        } ,
        {
            name:"grape",
            price:100,
            color:"green"
        },
        {
            name:"papaya",
            price:400,
            color:"orange"
        }
    ]

    return(

        //map is used to loop through an array ..each list should have an unique key to identify among them
     <div>
        {/* <ul>
       {fruits.map(fruit=>
       <li key={fruit}>{fruit}</li>
       )}
       </ul> */}

       {/* looping as a object */}
       <ul>
            {fruits.map((fruit)=>(

                //rendering using component
                <Fruit key={fruit.name} name={fruit.name} price= {fruit.price} color={fruit.color}/>


                //rendering objecct
            // <li key={fruit.name}>{fruit.name} {fruit.price} {fruit.color}</li>



          //rendering using ternary operators
            
        ))}

</ul> 

    </div>
    );
}
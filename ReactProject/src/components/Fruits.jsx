export default function Fruits(){

    const fruits=['apple' ,'grapes', 'litchi'];
    return(

        //map is used to loop through an array ..each list should have an unique key to identify among them
     <div>
        <ul>
       {fruits.map(fruit=>
       <li key={fruit}>{fruit}</li>
       )}
       </ul>
    </div>
    );
}
const name="john";


function displaymsg(){
    return "hello john";
}
//ructuring the props so instead of props in function we directly use {name, message}


//function Hello({message, name,id})
function Hello({person}){
    // return <h1> hello from component {name}</h1>
    //  return <h1>Add is {10+20}</h1>
    // return <h1>{displaymsg()}</h1>
    return(
    <div>
       {/* <h1> hello from component {name}</h1>
       <h1>{displaymsg()}</h1>
       <h1>Add is {10+20}</h1> */}
       {/* <h1>{message } {name} {id} </h1> */}
    {
        <h1>{person.message} {person.name} {person.id}</h1>
    }


    </div>
    );
}

export default Hello;
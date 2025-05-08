const name="john";


function displaymsg(){
    return "hello john";
}

function Hello(props){
    // return <h1> hello from component {name}</h1>
    //  return <h1>Add is {10+20}</h1>
    // return <h1>{displaymsg()}</h1>
    return(
    <div>
       {/* <h1> hello from component {name}</h1>
       <h1>{displaymsg()}</h1>
       <h1>Add is {10+20}</h1> */}
       <h1>{props.message } {props.name} </h1>


    </div>
    );
}

export default Hello;
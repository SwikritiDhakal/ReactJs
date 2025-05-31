import Code from "./Code";
import Welcome from "./Welcome";

export default  function ConditionalComponent(){


    //.............simple conditional rendering
    //const display= true;
//     if(display){
//         return (<div>       <h3>this is a conditional component</h3></div>);
//     } else{
//     return (
//         <div>
//         <h3>code everyday</h3>
//         </div> );
   
// }

// if(display){
//     return <Welcome/>

// } else{
//     return <Code/>
// }


///...............................conditional rendering elements 
const display= true;
// let message;
// if(display) {
//     message= <h1>This is message 1</h1>
// }
// else{
//    message= <h1>This is message 2</h1>
// }
//  return message;

//............................using ternary operator
      // return display? <h1>Message1</h1>: <h1>Message2</h1>



//....................using ternary operator for components

return display?<Welcome/>:<Code/>
}
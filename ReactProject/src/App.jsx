
import ConditionalComponent from './components/ConditionalComponent'
import Fruits from './components/Fruits'
import Hello from './components/Hello'

function App() {
  
  //passing array using props
//const id=[1,2,3,4]

const person= {
  name:"rob",
  message:"hii",
  id:[1,2,3,4]

}
  return (
    <div className="App">
      {/* <Hello
      person={person}

      //  name="john"
      //  message="hi there" 
      //  id={id} 

       /> */}
      {/* <Hello name="suru" message="hello!"/> */}
      <Fruits/>
      <ConditionalComponent/>
     
    </div>
  )
}

export default App


import Bank from './components/Bank'
import ConditionalComponent from './components/ConditionalComponent'
import Counter from './components/Counter'
import Form from './components/Form'
import Fruits from './components/Fruits'
import Hello from './components/Hello'
import Message from './components/Message'
import UseRed from './components/UseRed'
import UseReducerHookExample from './components/UseReducerHookExample'

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
      {/* <Fruits/>
      <ConditionalComponent/> */}
      {/* <Message/> */}
{/*      
        <Counter/> */}
        {/* <Form/> */}
        {/* <UseReducerHookExample/> */}
        {/* <UseRed/> */}
        <Bank/>

    </div>
  )
}

export default App


import Bank from './components/Bank'
import ConditionalComponent from './components/ConditionalComponent'
import Counter from './components/Counter'
import Form from './components/Form'
import Fruits from './components/Fruits'
import Hello from './components/Hello'
import Message from './components/Message'
import UseRed from './components/UseRed'
import UseReducerHookExample from './components/UseReducerHookExample'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import PageNotfound from './pages/PageNotFound'
import Nav from './components/Nav'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Product from './pages/Product'
import ContextExample from './components/ContextExample'
import Checkout from './components/Checkout'
import Logout from './components/Logout'
import useDisplay from './hooks/useDisplay'
import LoginHook from './components/LoginHook'


function App() {


  // const[message , displayMessage]= useDisplay();
  // displayMessage();
 //const msg=  displayMessage();


  //passing array using props
//const id=[1,2,3,4]

const person= {
  name:"rob",
  message:"hii",
  id:[1,2,3,4]

}
  return(
<div>
    {/* <ContextExample/> */}
    {/* {message} */}
    <LoginHook/>
  
 
</div>
  )


  // <BrowserRouter> 
  // <Nav/>
  //     <Routes>
  //       <Route path='*' element={<PageNotfound/>}/>
  //       <Route path="/" element={<HomePage/>}/>
  //       <Route path='/dashboard' element={<Dashboard/>}>
  //       <Route path='profile' element={<Profile/>}/>
  //       <Route path='settings' element={<Settings/>}/>
  //        </Route>
  //        <Route path='/product/:id' element={<Product/>}/>
  //     </Routes>
      
  //     </BrowserRouter>

  // (

    // <div className="App">
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
        {/* <Bank/> */}


    {/* This is app page
    </div> */}
      
  
}

export default App

import { useState } from 'react'  //hook 
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


//variable ko update karo lekin jo variable update kiya h wo UI me kaise effect karega ye react control krta h
//UI Updation ko react control krta h 
function App() {

  // useState ek hook h
  // useState do cheeze deta h array ke format me (array return krta h jisme do element hote h)
  // First one is varaible second one function
   // changes propogate


  let [counter,setCounter] = useState(15)
  // let counter = 10;
  const addvalue = ()=>{
  // counter++;
  console.log("Value added",counter);
  if(counter<20){
    setCounter(counter + 1)
  }
  //setCounter counter variable jaha hoga usko update kr dega nayi value se
  


}
  const removeValue = ()=>{
    if(counter>0){

      setCounter(counter-1);
    }
  }
  
  return (
    <>
      
    <h1>Chai aur react</h1>
        <h2>Counter : {counter}</h2>
        <button
        onClick={addvalue}>
          Add Value {counter}
        </button>
        <br />
          <button
          onClick = {removeValue} >Remove value {counter}</button>       
    </>
  )
}

export default App


/**
  useState(15) returns an array containing two elements:
- counter: the current state value.
- setCounter: a function used to request an update to that state.


What is re-rendering?	
React calls the component again to calculate UI
 */
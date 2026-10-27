import React from 'react';
import ReactDom from "react-dom/client";
import Chai from './chai.jsx';
import App from './App.jsx'

/*Alag file se import karane ki jagah uhi pe function/component bna skte h */
function MyApp(){
  return(
    <div>
      <h1>Custom App|shiva </h1>
    </div>
  )
}
// const reactElement = {
  //     type: 'a',
  //     props: {
    //         href: 'https://google.com',
    //         target: './blank'
    //     },
    //     children: 'click me to visit google'
    // }
    
    const anotherElement = (
      <a href="https://google.com" target='blank'>Visit google</a>
    )
    
    
    const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a', // tagname
  {href:'https://google.com',target:'_blank'}, // props/attributes
  'click me to visit google',
  // iske baad var inject krte h 
  anotherUser  // evaluated expression
)

ReactDom.createRoot(document.getElementById('root')).render(
 
    // <MyApp />
    // MyApp()  aise bhi execute kra skte h lekin aise krna nhi h karna waise hi h jaise converntion h aise krne se optimization me dikat aa skti h 

    // anotherElement 
    // reactElement


    // <App />

    reactElement
    // <Chai />
)

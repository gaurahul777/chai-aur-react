import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(0); 

  // let counter = 6; update to hoga lekin ui me propogate nhi hoga isliye hooks anbove
  const addvalue = () => {
    // console.log("clicked", Math.floor(Math.random() * 11));
    // counter = counter + 1;
    // setCounter(counter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((counter)=>counter+1);//kuch bihi naam de sakte ho
    setCounter((counter)=>counter+1);//kuch bihi naam de sakte ho
   
    // console.log("clicked add", counter);
  }

  const removevalue = () => {
    setCounter(counter - 1);
    // console.log("clicked remove",counter)
  }

  return (
    <>
      <h1>chai aur react wale</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value{ counter}</button>
      
      <br/>
      <button onClick={removevalue}>remove value{counter}</button>
      <p>footer:{counter}</p>
      
    </>
  )
}

export default App

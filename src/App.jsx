import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setcounter] = useState(0)
  // let counter = 14;
 
 
  // ADDING VALUE FUNCTION
  const addValue = () => {
  // console.log("Value added",Math.random());
  // console.log("Clicked",counter);

  // Method1
  // counter=counter+1
  // setcounter(counter)
 
  // Method 2
  if(counter<20){
  setcounter(counter+1)
}
}
// DELETING VALUE FUNCTION
  const removevalue = () => {
    if(counter>0){
  setcounter(counter-1)
}
  }

  return (
    <>
       
        <div>
        <h1>Chai aur react</h1>
        <h2>Counter value : {counter}</h2>

        <button 
        onClick={addValue}
        >Add Value </button>
        <br/>
        <br/>
        <button
        onClick={removevalue}
        >Remove Value </button>
        </div>
  
  
    </>
  )
}



export default App;


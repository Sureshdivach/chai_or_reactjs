

import { useState } from 'react'
import './App.css'

function App() {
 const[counter,setCounter]=useState(15) 

const addValue=()=>{
  if( counter<20){
const  count=counter+1
  setCounter(count)
  console.log("value added" ,counter,Math.random())}
}
console.log(counter);

const removeValue=()=>{
  if(counter>0){
 let removecount=counter-1
setCounter(removecount)
// console.log(removecount);
}
}
  return (
    <>
      
     <h1>chai or react</h1>
     <h2>counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
      <br/> <br/>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

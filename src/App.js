import React, { useCallback } from 'react';
import { useState } from 'react';
import './App.css';
import Child from './Child';


function App() {

const [counter, setCounter] = useState(0);
const [input, setInput] = useState("")

const updateCounterFromChild = useCallback(() => setCounter(counter+1),[counter])

  return (
    <div className="App">
      <h1>Hello from Parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} >+1 </button>
      <input type="text" onChange={e => setInput(e.target.value)} value={input} />
      <Child counter = {counter} updateCounter={updateCounterFromChild}/>
    </div>
  );
}

export default App;

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
      <h1>Parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} >+1 </button><br /><br />
      <p>Type Some Inputs</p>
      <input type="text" onChange={e => setInput(e.target.value)} value={input} placeholder="type Input Here !"/>
      <Child counter = {counter} updateCounter={updateCounterFromChild}/>
    </div>
  );
}

export default App;

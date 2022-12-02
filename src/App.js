import React from 'react';
import { useState } from 'react';
import './App.css';
import Child from './Child';


function App() {

const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Hello from Parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} >+1 </button>
      <Child/>
    </div>
  );
}

export default App;

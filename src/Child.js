import React from 'react' ;
import "./Child.css";
import { memo } from 'react';

const Child = props => {
  
    const {counter, updateCounter} = props;


    console.log("Child is Rendering !!! ");

    return (
        <div className='Child'> 
        <h1>Child - {counter}</h1>
        <button onClick={updateCounter}>click</button>
        </div>
  )
};

export default memo(Child);
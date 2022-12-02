import React from 'react' ;
import "./Child.css";
import { memo } from 'react';

const Child = props => {
  
    console.log("Child is Rendering !!! ");

    return (
        <div className='Child'> 
        <h1>Child</h1>
        </div>
  )
};

export default memo(Child);
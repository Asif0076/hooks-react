import React from 'react' ;
import "./Child.css";
import { memo } from 'react';
import { useMemo } from 'react';

const Child = props => {
  
    const {counter, updateCounter} = props;


      const childNumber = useMemo(() =>{
        let output = 0;
      for(let i = 0; i < 500000; i++){
        output++;
      }  
        return output;
      }, []);
      // let childNumber = 0;
      // for(let i = 0; i < 500000; i++){
      //   childNumber++
      // }

    console.log("Child is Rendering !!! ");

    return (
        <div className='Child'> 
        <h1>Child - {childNumber} {counter}</h1>
        <button onClick={updateCounter}>click</button>
        </div>
  )
};

export default memo(Child);
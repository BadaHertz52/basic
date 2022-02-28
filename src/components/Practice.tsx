import React  from 'react';
import '../assets/practice.css'
const Practice =()=>{
  const array:number[] =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <div id="practice">
      <section>
        <div className="loader">
          {array.map(a=> <span></span>)}
        </div>
      </section>
    </div>
  )
};


export default Practice ;
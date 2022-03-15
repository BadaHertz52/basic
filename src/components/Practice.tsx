import React from 'react';
import '../assets/practice.css'
const Practice =()=>{
   const per =document.getElementById("per");
   const bar = document.getElementById("bar");
   let count =0;
   const p =document.getElementById("p");
   const onStart =()=>{
      const loading =setInterval(percent, 80);
      function percent(){
         if(count ===100){
            clearInterval(loading);
            p.style.display ="none";
            per.textContent ="COMPLETE"
            per.style.fontWeight ="700";
            per.style.fontSize= "1.2rem";
            
         }else{
            count++;
            bar.animate([
            {},
            {
               strokeDashoffset:"0"
            }
            ],{
               duration:100000,
               easing:"linear",
               fill:"both" 
            });
            per.textContent =String(count);
            per.style.fontSize="2.5rem";
            p.style.display ="block";
         }
      };
   };
   return (
      <div id="practice">
         <div className="box">
            <div className="percent">
               <svg>
                  
                  <circle cx="70" cy="70" r="70" />
                  <circle cx="70" cy="70" r="70" id="bar"/>
               </svg>
               <div className="number">
                  <div id="per"> 
                     0
                  </div>
                  <span id="p">
                     %
                  </span>
               </div>
            </div>
            <button className='btn' onClick={onStart}>start</button>   
         </div>
      </div>
   )
};


export default Practice ;
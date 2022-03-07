import React, { useEffect, useState } from 'react';

const Loading =()=>{
  let circle2_spans =[]
  let i =0;
  while (i<20 && circle2_spans.length<20){
    circle2_spans.push(<span key={`circle2_span_${i}`} id={`circle2_span_${i}`}></span>);
    i++;
  };

  /*bar2*/
  const bar2  = document.getElementById("bar2");
  const bar2_bar   =document.getElementById("bar2_bar");
  const bar2_percent  =document.getElementById("bar2_percent");
  const innerWidth = window.innerWidth;
  const [bar2Width, setBar2Width]=useState(0);
  let percent =0;
  const loadingBar2  =setInterval(showPercentBar2, 100);
  function showPercentBar2 (){
    if(bar2!==null 
      && bar2_bar !==null 
      &&bar2_percent !==null ){
        if(percent ===100 ){
          clearInterval(loadingBar2);
          bar2_percent.textContent ="Complete!!";
        }else {
          percent =percent +1;
          bar2_bar.style.width =  bar2Width *0.01 * percent + "px";
          bar2_percent.textContent= percent +"%";
      }
  }};
  
  window.onresize = ()=>{
    innerWidth> 700 ?
    setBar2Width(innerWidth * 0.23):
      innerWidth>320?
      setBar2Width(innerWidth * 0.6):
      setBar2Width (innerWidth *0.5)    
    if(bar2 !==null){
      bar2.style.width = bar2Width+ "PX";
    }
  };

  return (
    <div id="loading">
      <section id="circleLoading">
        <header>Circle</header>
        <div>
          <div id="circle1" className='container'>
            <div className='loader'>
              <span></span>
            </div>
          </div>
          <div id="circle2" className='container'>
            <div className='loader'>
              {circle2_spans}
            </div>
          </div>
        </div>
      </section>
      <section id="floatingLoading">
        <header>
          Floating
        </header>
        <div>
          <div id="floating1" 
          className='container'>
            <div className='loader'>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div id="floating2" className='container'>
            <div className='loader'>
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
          </div>
        </div>
      </section>
      <section id="barLoading">
        <header>Bar</header>
        <div>
          <div  id="bar1" className='container'>
            <div className='loader'>
              <div id="bar1_bar" className='bar'>
              </div>  
            </div>
            <div className='loading'>
              Loading...
            </div>
          </div>
          <div id="bar2" className='container' >
            <div className='loader' >
              <div id="bar2_bar" className='bar'></div>
            </div>
            <div id="bar2_percent" className='loading'>%</div>
          </div>
        </div>
      </section>
    </div >
  )
};

export default Loading
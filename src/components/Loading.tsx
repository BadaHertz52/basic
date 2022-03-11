import React, { useState } from 'react';

const Loading =()=>{
  const innerWidth = window.innerWidth;
  let circle2_spans =[]
  let i =0;
  while (i<20 && circle2_spans.length<20){
    circle2_spans.push(<span key={`circle2_span_${i}`} id={`circle2_span_${i}`}></span>);
    i++;
  };

  /*circle4*/
  const circle4_circle2 =document.getElementById("circle4_circle2");
  const circle4_per =document.getElementById("circle4_per"); 
  let circle4_count =0;
  const circle4_loader =setInterval(circle4_percent,80 );
  function circle4_percent(){
    if(circle4_count >=100){
      clearInterval(circle4_loader);
      circle4_per.textContent ="COMPLETE";
      circle4_per.parentElement.classList.add("complete");
    }else{
      circle4_count =circle4_count+1;
      circle4_circle2.animate([
        {},
        {
          strokeDashoffset:"0"
        }
        ],{
            duration:  140000,
            easing:"linear",
            fill:"both" 
        });
        circle4_per.parentElement.classList.contains("complete")&&
        circle4_per.parentElement.classList.remove("complete");
        circle4_per.textContent =String(circle4_count);
      }

  };

  /*bar2*/
  const bar2  = document.getElementById("bar2");
  const bar2_bar   =document.getElementById("bar2_bar");
  const bar2_percent  =document.getElementById("bar2_percent");

  const [bar2Width, setBar2Width]=useState(0);
  let bar2_per =0;
  const loadingBar2  =setInterval(showPercentBar2, 50);
  function showPercentBar2 (){
    if(bar2!==null 
      && bar2_bar !==null 
      &&bar2_percent !==null ){
        if(bar2_per ===100 ){
          clearInterval(loadingBar2);
          bar2_percent.textContent ="Complete!!";
        }else {
          bar2_per =bar2_per +2;
          bar2_bar.style.width =  bar2Width *0.01 * bar2_per + "px";
          bar2_percent.textContent= bar2_per +"%";
      }
  }};
   const adjustWidth =()=>{
    innerWidth> 700 ?
    setBar2Width(innerWidth * 0.23):
      innerWidth>320?
      setBar2Width(innerWidth * 0.6):
      setBar2Width (innerWidth *0.5)    
    if(bar2 !==null){
      bar2.style.width = bar2Width+ "PX";
    }
  };

  window.onresize = adjustWidth;
  window.onload =adjustWidth;
  return (
    <div id="loading">
      <section id="circleLoading">
        <header>Circle</header>
        <div>
          <div className='circles'>
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
            <div id="circle3" className='container loader'>
              <div className="inner "></div>
              <div className="outer "></div>
              <div className="loading ">
                Loading...
              </div>
              <div className="circle ">
                <div className="dot">
                  <svg>
                    <circle cx="50%" cy="50%" r="50%"/>
                  </svg>  
                </div>
                <div className="dot">
                  <svg>
                    <circle cx="50%" cy="50%" r="50%"/>
                  </svg>  
                </div>
                <div className="bar left">
                  <div className="progress"></div>
                </div>
                <div className="bar right">
                  <div className="progress"></div>
                </div>  
              </div>
            </div>
          </div>

          <div className='circles' id="percent_circle">
            <div id="circle4" 
              className='container'
            >
              <div className="loader">
                <svg>
                  <circle cx="45%" cy="45%" r="40%"/>
                  <circle cx="45%" cy="45%" r="40%"  id="circle4_circle2"/>
                </svg>
                <div className="percent">
                  <span id="circle4_per">
                    0
                  </span>
                  <span>
                    %
                  </span>
                </div>
              </div>
            </div>
            <div id="circle5" 
              className='container'
            >
              <div className="loader">
                <svg>
                  <circle cx="45%" cy="45%" r="40%"/>
                  <circle cx="45%" cy="45%" r="40%" />
                </svg>
                <div className="percent">
                  <span id="circle4_per">
                    13
                  </span>
                  <span>
                    %
                  </span>
                </div>
              </div>
            </div>
            <div id="circle6" 
              className='container'
            >
              <div className="loader">
                <svg>
                  <circle cx="45%" cy="45%" r="40%"/>
                  <circle cx="45%" cy="45%" r="40%" />
                </svg>
                <div className="percent">
                  <span id="circle4_per">
                    60
                  </span>
                  <span>
                    %
                  </span>
                </div>
              </div>
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
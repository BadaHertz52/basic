import React from 'react';

const Loading =()=>{
  let circle2_spans =[]
  let i =0;
  while (i<20 && circle2_spans.length<20){
    circle2_spans.push(<span key={`circle2_span_${i}`} id={`circle2_span_${i}`}></span>);
    i++;
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
              <div className='bar'></div>  
            </div>
            <div className='loading'>
              Loading...
            </div>
          </div>
        </div>
      </section>
      <section id="percentLoading">

      </section>
    </div >
  )
};

export default Loading
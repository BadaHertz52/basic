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
      </section>
    </div >
  )
};

export default Loading
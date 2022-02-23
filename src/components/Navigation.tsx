import React from 'react';


const Navigation =()=>{
  return(
    <div id="navigation">
      <div id="navMenu"></div>
      <div id="navList">
        <a href='/basic/loading'>loading</a>
      </div>
    </div>
  )
};

export default React.memo(Navigation)
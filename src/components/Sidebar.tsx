import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiMenuFoldLine, RiMenuUnfoldLine }from 'react-icons/ri'
import { useState } from 'react';

const Sidebar =()=>{
  const navigate=useNavigate();
  const [open, setOpen] =useState<boolean>(false);
  const sidebar =document.getElementById("sidebar");

  const onMenu =()=>{
    setOpen(!open);
    if(sidebar !==null ){
      const width =window.innerWidth * 0.3;
      open ?
      sidebar.style.marginLeft = "0px"
      :
      sidebar.style.marginLeft = `-${width}px`;
    }
    
  };

  return(
    <div id="sidebar">
      <nav id="navMenu">
        <div className='inner'>
          <header>Menu</header>
          <ul>
            <li>  
              <button onClick={()=>(navigate('/basic/'))}>
                Home
              </button >
            </li>
            <li>  
              <button onClick={()=>(navigate('/basic/practice'))}>
                Practice
              </button >
            </li>
            <li>  
              <button onClick={()=>(navigate('/basic/loading'))}>
                Loading
              </button >
            </li>
          </ul>
        </div>
      </nav>
      <button id="navIcon" onClick={onMenu}>
        {open? <RiMenuUnfoldLine/> :<RiMenuFoldLine/>}
      </button>
    </div>
  )
};

export default React.memo(Sidebar)
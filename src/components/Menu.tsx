import React from 'react';
import {CgMenuRound} from 'react-icons/cg';

const Menu=()=>{

  return(
    <div id="menus">
      <section id="menu1">
        <header>Type 1. Hide</header>
        <div className='menuBox'>
          <div className='length'>
            <div className='nav'>
              <div className='name'>
                Bada Cafe
              </div>
              <ul className='menubar'>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <button className='logIn'>
                <span>Log In</span>
              </button>
            </div>
            <div className='menuIcon'>
              <CgMenuRound/>
            </div>
          </div>
          <div className='length'>
            <div className="nav">
              <div className='name'>
                Bada Cafe
              </div>
              <ul className='menubar'>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <button className='logIn'>
                <span>Log In</span>
              </button>  
            </div>
            <div className="menuIcon">
              <CgMenuRound/>
            </div>
          </div>
        </div>
      </section>
      <section id="menu2">
        <header>Type 2. Drop</header>
        <div className='menuBox'>
          <div className='transverse'>
            <div className='name'>
              Bada Cafe
            </div>
            <ul className='menubar'>
              <li>
                <span></span>
                <span>Home</span>
              </li>
              <li>
                <span></span>
                <span>Product</span>
              </li>
              <li>
                <span></span>
                <span>About</span>
              </li>
              <li>
                <span></span>
                <span>Contact</span>
              </li>
            </ul>
            <button className='logIn'>
                <span>Log In</span>
              </button>
          </div>
          <div className='transverse'>
            <div className='name'>
              Bada Cafe  
            </div>
            <ul className='menubar'>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <button className='logIn'>
                <span>Log In</span>
              </button>
          </div>
        </div>
      </section>
      <section id="menu3">
        <header>Type 3.</header>
        <div className='menuBox'>
          <div className='length'>
            <div className='name'>
              Bada Cafe  
            </div>
            <ul className='menubar'>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <button className='logIn'>
                <span>Log In</span>
              </button>
          </div>
          <div className='transverse'>
            <div className='name'>
              Bada Cafe
            </div>
            <ul className='menubar'>
              <li>
                Home
              </li>
              <li>Product</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <button className='logIn'>
                <span>Log In</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default React.memo(Menu);
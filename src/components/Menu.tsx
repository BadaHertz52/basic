import React from 'react';
import {CgMenuRound} from 'react-icons/cg';
import {BiCoffeeTogo} from 'react-icons/bi' ;
import {AiOutlineSmile} from 'react-icons/ai';
import coffe from '../assets/img/coffe.jpg';
import beverage from '../assets/img/beverage.jpg';
import bread from '../assets/img/bread.jpg';

const Menu=()=>{
  const onShowSide =()=>{

  };
  const SideButton =()=>{
    return (
      <button className='menuIcon' onClick={onShowSide}>
        <CgMenuRound/>
      </button>
    )
  }
  const Side =()=>{
    return(
      <div className="side">
        <div className='nav'>
          <div className='name'>
            Caffe &nbsp;
              <AiOutlineSmile/>
              <BiCoffeeTogo/>
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
        <SideButton/>
    </ div>
    )
  };
  const Main =()=>{
    return (
      <div className="main">
              <div className="main_section">
                <img src={coffe} alt="coffe"/>
                <div>
                  Senectus et netus et malesuada.
                </div>
              </div>
              <div className='main_section'>
                <img src={beverage} alt="new beverage" />
                <div> 
                  id faucibus nisl tincidunt eget
                </div>
              </div>
              <div className='main_section'>
                <img src={bread} alt="bread"/>
                <div>
                Commodo odio aenean sed adipiscing diam donec
                </div>
              </div>
            </div>
    )
  };
  const Length =()=>{
    return (
      <div className="length">
        <Side/>
        <div className="header">
          <div className='name'>
            Caffe &nbsp;
              <AiOutlineSmile/>
              <BiCoffeeTogo/>
          </div>
          <div>
            <button className='logIn'>
              <span>Log In</span>
            </button>
            <SideButton/>
          </div>
        </div>
        <Main/>
      </div>
    )
  };

  const Transverse =()=>{
    return (
      <div className="transverse">
        <Side/>
        <Main/>
      </div>
    )
  }
  return(
    <div id="menus">
      <section id="menu1">
        <header>Type 1. Hide</header>
        <div className='menuBox'>
          <Length/>
          <Length/>
        </div>
      </section>
      <section id="menu2">
        <header>Type 2. Drop </header>
        <div className='menuBox'>
          <Transverse/>
          <Transverse/>
        </div>
      </section>
      <section id="menu3">
        <header>Type 3. </header>
        <div className='menuBox'>
          <Length/>
          <Transverse/>
        </div>
      </section>

    </div>
  )
};

export default React.memo(Menu);
import React, { useRef } from 'react';
import {CgMenuRound} from 'react-icons/cg';
import {BiCoffeeTogo, BiHomeSmile} from 'react-icons/bi' ;
import {AiOutlineSmile} from 'react-icons/ai';
import {MdOutlineConnectWithoutContact, MdOutlineContactSupport} from 'react-icons/md';

import coffe from '../assets/img/coffe.jpg';
import beverage from '../assets/img/beverage.jpg';
import bread from '../assets/img/bread.jpg';
import { RiLoginCircleLine } from 'react-icons/ri';

const Menu=()=>{

  const SideButton =({side , outNavBtn})=>{
    const onShowSide =()=>{ 
      if(side.current.classList.contains("on")){
        side.current.classList.remove("on");
        outNavBtn.current.classList.remove("on");
      }else{
        side.current.classList.add("on");
        outNavBtn.current.classList.add("on");
      }      
    };
    return (
      <button className='menuIcon' onClick={onShowSide} >
        <CgMenuRound/>
      </button>
    )
  }
  const Side =({on })=>{
    const side =useRef<HTMLDivElement>();
    const outNavBtn =useRef<HTMLDivElement>();
    
    return(
      <>
      <div className={on? "side on left " :"side"} ref={side}>
        <div className='nav'>
          <div className='name'>
              <span>Caffe</span>
              <div>
                <AiOutlineSmile/>
                <BiCoffeeTogo/>
              </div>
          </div>
          <ul className='menubar'>
            <li>
              <BiHomeSmile/>
              <span>Home</span>
            </li>
            <li>
              <BiCoffeeTogo/>
              <span>Product</span>
            </li>
            <li>
              <MdOutlineContactSupport/>
              <span>About</span>
            </li>
            <li>
              <MdOutlineConnectWithoutContact/>
              <span>Contact</span>
            </li>
          </ul>
          <div className='logIn'>
            <button >
              Log In
            </button>
            <RiLoginCircleLine/>
          </div>

        </div>
        <SideButton side={side} outNavBtn={outNavBtn}/>
      </div>
      <div className='outNavBtn' ref={outNavBtn}>
        <SideButton side={side} outNavBtn={outNavBtn}/>
      </div>
      </>
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
  const Length =({on})=>{
    return (
      <div className="length">
        <Side on={on} />
        <div>
          <div className="header">
            <div className='name'>
              Caffe &nbsp;
                <AiOutlineSmile/>
                <BiCoffeeTogo/>
            </div>
          </div>
          <Main/>
        </div> 
      </div>
    )
  };

  const Transverse =()=>{
    return (
      <div className="transverse">
        <Side on={false} />
        <Main/>
      </div>
    )
  };
  const menu1_length2 =useRef<HTMLDivElement>();
    if(menu1_length2.current !==undefined){
      menu1_length2.current.addEventListener("scroll", adjustHeight);
      function adjustHeight(){
        const top = menu1_length2.current.scrollTop;
        const side =menu1_length2.current.firstElementChild;
        const main =menu1_length2.current.lastElementChild.lastElementChild;
        
        if(side !==undefined && main !==undefined){
          const main_height =Number((main as HTMLElement).style.height) ;
          const side_height = Number((side as HTMLElement).style.height); 
          const last_top:number = main_height -side_height;
        
          if(Number(top)  > last_top ){
            (side as HTMLDivElement).style.top = Number(top)+"px";
          }else{
            (side as HTMLDivElement).style.top = last_top +"px";
          }
        
      }
    }
   }

  
  return(
    <div id="menus">
      <section id="menu1">
        <header>Type 1. Hide</header>
        <div className='menuBox'>
          <div className="length" ref={menu1_length2}>
              <Side 
              on={false} />
            <div>
              <div className="header">
                <div className='name'>
                  Caffe &nbsp;
                    <AiOutlineSmile/>
                    <BiCoffeeTogo/>
                </div>
              </div>
              <Main/>
            </div> 
          </div>
          <Length on={true}/>
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
          <Length on={true}/>
          <Transverse/>
        </div>
      </section>

    </div>
  )
};

export default React.memo(Menu);
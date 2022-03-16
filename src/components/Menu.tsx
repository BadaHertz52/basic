import React, { useEffect, useRef } from 'react';
import {CgMenuRound} from 'react-icons/cg';
import {BiCoffeeTogo, BiHomeSmile, BiNews, BiStore} from 'react-icons/bi' ;
import {AiOutlineSmile} from 'react-icons/ai';

import coffe from '../assets/img/coffe.jpg';
import beverage from '../assets/img/beverage.jpg';
import bread from '../assets/img/bread.jpg';
import { RiArrowDropDownLine, RiLoginCircleLine } from 'react-icons/ri';

const Menu=()=>{

  const SideButton =({side , outNavBtn})=>{
    const clickIcon =useRef<HTMLDivElement>();
    const onShowSide =()=>{ 
      if(side.current.classList.contains("on")){
        clickIcon.current.classList.add("on");
        side.current.classList.remove("on");
        outNavBtn.current.classList.remove("on");
      }else{
        clickIcon.current.classList.remove("on");
        side.current.classList.add("on");
        outNavBtn.current.classList.add("on");
      }      
    };
    return (
      <div className='menuIcon'  >
        <button onClick={onShowSide}>
          <CgMenuRound/>
        </button>
        <div className="clickIcon" ref={clickIcon}>
          click icon
        </div>
      </div>
    )
  }
  const MenuBar =()=>{
    return(
      <ul className='menubar'>
      <li>
        <BiHomeSmile/>
        <span>Company</span>
      </li>
      <li>
        <BiCoffeeTogo/>
        <span>Menu</span>
      </li>
      <li>
        <BiStore/>
        <span>Store</span>
      </li>
      <li>
        <BiNews/>
        <span>News</span>
      </li>
    </ul>
    )
  }
  const DropMenu =()=>{
    const onShowMenu =(event)=>{
      const target:HTMLElement =event.target;
      const button = target.tagName === "BUTTON" ? target : target.parentElement;
      const subMenu =button.nextElementSibling ;
      if(button.classList.contains("on")){
        button.classList.remove("on");
        subMenu.classList.remove("on"); 
      }else{
        button.classList.add("on");
        subMenu.classList.add("on");
      }
    }
    return(
      <ul className='menubar dropDown'>
        <li className='mainMenu'>
          <button  className='menuName'>
            <span>Company</span>
          </button>    
        </li>
        <li className='mainMenu'>
          <button className='menuName' onClick={onShowMenu}>
            <span>Menu</span>
            <RiArrowDropDownLine/>
          </button>   
          <ul className='subMenu'>
            <li className='sub_mainMenu'>
              <button className='sub_mainMenu_name' onClick={onShowMenu}> 
                <span>Beverage</span>
                <RiArrowDropDownLine/>
              </button>
              <ul className='sub_subMenu'>
                <li>Cold brew</li>
                <li>Esopresso</li>
                <li>Frappuccino</li>
                <li>Tea</li>
              </ul>
            </li>
            <li className='sub_mainMenu'>
              <button className='sub_mainMenu_name' onClick={onShowMenu} >
                <span>Food</span>
                <RiArrowDropDownLine/>
              </button>
              <ul className='sub_subMenu'>
                <li>Cake</li>
                <li>Bread</li>
                <li>Sandwich</li>
                <li>Frappuccino</li>
              </ul>
            </li>
            <li className='sub_mainMenu'>
              <button className='sub_mainMenu_name' onClick={onShowMenu}> 
                <span>Product</span>
                <RiArrowDropDownLine/>
              </button>
              <ul className='sub_subMenu'>
                <li>Mug</li>
                <li>Tumbler</li>
                <li>Beans</li>
                <li>gift card</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='mainMenu'>
          <button className='menuName' onClick={onShowMenu}>
            <span>Store</span>
            <RiArrowDropDownLine/>
          </button>
          <ul className='subMenu'>
            <li className='sub_mainMenu'>
              <button className='sub_mainMenu_name' onClick={onShowMenu}>
                <span>Find Store</span>
                <RiArrowDropDownLine/>
              </button>
              <ul className='sub_subMenu'>
                <li>quik </li>
                <li>location</li>
              </ul>
            </li>
            <li className='sub_mainMenu'>
              <div className='sub_mainMenu_name'>
                <span>Drive-through</span>
              </div>
            </li>
          </ul>
        </li>
        <li className='mainMenu'>
          <button className="menuName" onClick={onShowMenu}>
            <span>News</span>
            <RiArrowDropDownLine/>
          </button>
          <ul className='subMenu'>
            <li className='sub_mainMenu'>
              <button className='sub_mainMenu_name'onClick={onShowMenu}>
                <span>Event</span>
                <RiArrowDropDownLine/>
              </button>
              <ul className='sub_subMenu'>
                <li>Whole </li>
                <li>OnLine</li>
                <li>Gift card</li>
              </ul>
            </li>
            <li className='sub_mainMenu'>
              <button className='sub_mainMenu_name' onClick={onShowMenu}>
                <span>Notice</span>
                <RiArrowDropDownLine/>
              </button>
              <ul className='sub_subMenu'>
                <li>whole </li>
                <li>New menu </li>
                <li>Recruit</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
  const Side =({on , drop})=>{
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
          {drop?
          <DropMenu/>
          :
          <MenuBar/>
          }
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
  const Length =({on ,drop})=>{
    return (
      <div className="length">
        <Side on={on} drop={drop} />
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

  const Length2 =({on, drop , absoulte})=>{
    const length2 =useRef<HTMLDivElement>();

    useEffect(()=>{
      if(length2.current !==undefined && absoulte){
        length2.current.addEventListener("scroll", adjustHeight);
        function adjustHeight(){
          const top = length2.current.scrollTop;
          const side =length2.current.firstElementChild;
          const main =length2.current.lastElementChild.lastElementChild;
          const main_height =Number((main as HTMLElement).style.height) ;
          const side_height = Number((side as HTMLElement).style.height); 
          const last_top:number = main_height -side_height;
        
          if(Number(top)  > last_top ){
            (side as HTMLDivElement).style.top = Number(top)+"px";
          }else{
            (side as HTMLDivElement).style.top = last_top +"px";
          }
      }
    };
    },[length2.current]);

    return(
      <div className="length length2" ref={length2}>
              <Side on={on} drop={drop} />
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

  const Transverse =({ drop})=>{
    return (
      <div className="transverse">
        <Side on={false} drop ={drop} />
        <Main/>
      </div>
    )
  };

 

  return(
    <div id="menus">
      <section id="menu1">
        <header>Type 1. Hide</header>
        <div className='menuBox'>
          <Length2 on={false} drop={false} absoulte={true} />
          <Length on={true} drop={false}/>
        </div>
      </section>
      <section id="menu2">
        <header>Type 2. Drop </header>
        <div className='menuBox'>
          <Transverse drop={true}/>
          <Length2 on={false} drop={true} absoulte={false}/>
        </div>
      </section>
      <section id="menu3">
        <header>Type 3. </header>
        <div className='menuBox'>
          <Length on={true} drop={false}/>
          <Transverse drop={false}/>
        </div>
      </section>

    </div>
  )
};

export default React.memo(Menu);
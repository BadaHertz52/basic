import React, { useEffect }from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Loading from './components/Loading';
import Navigation from './components/Sidebar';
import Home from './components/Home';
import './assets/main.css';
import Practice from './components/Practice';
import Menu from './components/Menu';


function App() {
  const location =useLocation();
  const navigate =useNavigate();
  useEffect(()=>{
    location.pathname==="/" && navigate('/basic/');
  },[location, navigate]);
  
  return (
    <>
      <Navigation/>
      <div id="main">
        <Routes>
          <Route 
            path="/basic"
            element={<Home/>}
          />
          <Route 
            path="/basic/loading"
            element={<Loading/>}
          />
          <Route 
            path="/basic/menu"
            element={<Menu/>}
          />
          <Route
            path="/basic/practice"
            element={<Practice/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

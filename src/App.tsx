import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Home from './router/Home';
import './assets/main.css';
import { useEffect } from 'react';


function App() {
  const location =useLocation();
  const navigate =useNavigate();
  useEffect(()=>{
    location.pathname==="/" && navigate('/basic');
  },[]);
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
        </Routes>
      </div>
    </>
  );
}

export default App;

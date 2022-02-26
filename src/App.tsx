import React, { useEffect }from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Home from './router/Home';
import './assets/main.css';


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
            path="/basic/"
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

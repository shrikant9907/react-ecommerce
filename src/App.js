import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BsNavbar from './components/navbar/Navbar';
import Header from './layouts/Header/Header';
import { TopMenusRoutes } from './_config/TopMenus';

const App = () => {
  return (
    <Router>

      {/* <BsNavbar brandname="React E-Commerce Logo" logotype="text" logosrc="" /> */}
      <Header />
      
      <Routes>
        {/* Top Menu Routes Configuration is in _config/TopMenus.js */}

        { 
          TopMenusRoutes && TopMenusRoutes.map((route, ridx) => {
            return <Route {...route} key={ridx} /> 
          }) 
        }
     
      </Routes>

    </Router>
  );
}

export default App;   

 
import React from 'react'; 
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layouts/Header/Header';
import { TopMenusRoutes } from './_config/TopMenus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './layouts/Footer/Footer';

const App = () => {
  return (
    <>
      <Router>

      <Header />
      <Footer />

      <Routes>
        {/* Top Menu Routes Configuration is in _config/TopMenus.js */}

        { 
          TopMenusRoutes && TopMenusRoutes.map((route, ridx) => {
            return <Route {...route} key={ridx} /> 
          }) 
        }

      </Routes>

      </Router>
      <ToastContainer />
    </>
  );
}

export default App;   

 
import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import Aboutme from './components/Pages/Aboutme';
import Projects from './components/Pages/Projects';
import LearnMore from './components/Pages/LearnMore.js';

function App() {
  return (
    <>
    <Router> 
       <Navbar/>
       <Switch>
         <Route path='/' exact component ={Home} />
         <Route path='/aboutme' exact component ={Aboutme} />
         <Route path='/projects' exact component ={Projects} />
         <Route path='/learnmore' exact component ={LearnMore} />
       </Switch>
    </Router>


 
    </>
  );
}

export default App;

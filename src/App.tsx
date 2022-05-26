import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Home from './components/home'; 
import Test from './components/test';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/test" element={<Test />}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

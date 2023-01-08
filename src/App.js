
import React from 'react';
import './App.css';
import Home from './component/Home'
import About from './component/About';
import Bridgelabz from './component/Blab';
import { Route, Routes, Link } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/home">Home </Link>   |
          <Link to="/bridgelabz">BridgeLabz </Link>   |
          <Link to="/about">About    </Link>
        </h1>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bridgelabz' element={<Bridgelabz />} />
        </Routes>
      </div>);
  }
}

export default App;
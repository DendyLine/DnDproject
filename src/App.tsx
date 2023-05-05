import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavMenu } from './assets/components';
import { Classes, Home, Races } from './assets/Routes';


function App() {
  const [showNavMenu, setShowNavMenu] = useState(true);

  function toggleNavMenu() {
    setShowNavMenu(!showNavMenu);
  }

  return (
    <div className="App">
      <NavMenu showNavMenu={showNavMenu}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/races' element={<Races showNavMenu={showNavMenu} toggleNavMenu={toggleNavMenu}/>}/>
      <Route path='/classes' element={<Classes showNavMenu={showNavMenu} toggleNavMenu={toggleNavMenu}/>}/>
      </Routes>
    </div>
  );
}

export default App;

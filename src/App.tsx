import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavMenu } from './assets/components';
import { Home, Races } from './assets/Routes';


function App() {

  return (
    <div className="App">
      <NavMenu/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/races' element={<Races/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Races } from './assets/Routes';


function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/races' element={<Races/>}/>
      </Routes>
    </div>
  );
}

export default App;

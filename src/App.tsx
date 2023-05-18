import './App.css';
import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {NavMenu} from './assets/components';
import {Classes, Home, Races, RacesTileChosen, ClassesTileChosen} from './assets/Routes';

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
                <Route path='/races' element={<Races showNavMenu={showNavMenu} toggleNavMenu={toggleNavMenu}/>}>
                    <Route path=':id' element={<RacesTileChosen/>}/>
                </Route>
                <Route path='/classes' element={<Classes showNavMenu={showNavMenu} toggleNavMenu={toggleNavMenu}/>}>
                    <Route path=':id' element={<ClassesTileChosen/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

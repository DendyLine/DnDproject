import { NavLink } from 'react-router-dom';


interface INavMenuProps{
  showNavMenu: boolean;
}

export const NavMenu = (props: INavMenuProps) => {
  const currentPath = window.location.pathname;

  if (currentPath === '/') {
    return null;
  }

  return (
    <div className={`NavMenu ${props.showNavMenu ? 'Nav-menu' : 'Nav-menu--closed'}`}>
      <div className='Nav-menu__header'>
        <h1>DnD</h1>
        <h2>pechera</h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/races" className="Nav-menu__element">Раси</NavLink></li>
          <li><NavLink to="/classes" className="Nav-menu__element">Класи</NavLink></li>
          <li><NavLink to="/features" className="Nav-menu__element">Властивості</NavLink></li>
          <li><NavLink to="/histories" className="Nav-menu__element">Передісторії</NavLink></li>
          <li><NavLink to="/weapon" className="Nav-menu__element">Зброя</NavLink></li>
          <li><NavLink to="/armor" className="Nav-menu__element">Обладунки</NavLink></li>
          <li><NavLink to="/equipment" className="Nav-menu__element">Спорядження</NavLink></li>
          <li><NavLink to="/artifacts" className="Nav-menu__element">Магічні предмети</NavLink></li>
          <li><NavLink to="/bestiary" className="Nav-menu__element">Бестіарій</NavLink></li>
          <li><NavLink to="/spells" className="Nav-menu__element">Заклинання</NavLink></li>
          <li><NavLink to="/tools" className="Nav-menu__element">Інструменти</NavLink></li>
          <li><NavLink to="/news" className="Nav-menu__element">Новини</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};
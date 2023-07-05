interface INavMenuProps{
    path: string
}

export const NavMenu = (props: INavMenuProps) => {

  if (props.path === '/') {
    return null;
  }

  return (
    <div  id="NavMenu" className='Nav-menu'>
        <a className='content__expander' href='#NavMenu'>x</a>
      <div className='Nav-menu__header'>
       <a href='/'><h1>DnD</h1></a>
        <h2>pechera</h2>
      </div>
      <nav>
        <ul>
          <li><a href="/races" className="Nav-menu__element">Раси</a></li>
          <li><a href="/classes" className="Nav-menu__element">Класи</a></li>
          <li><a href="/features" className="Nav-menu__element">Властивості</a></li>
          <li><a href="/histories" className="Nav-menu__element">Передісторії</a></li>
          <li><a href="/weapon" className="Nav-menu__element">Зброя</a></li>
          <li><a href="/armor" className="Nav-menu__element">Обладунки</a></li>
          <li><a href="/equipment" className="Nav-menu__element">Спорядження</a></li>
          <li><a href="/artifacts" className="Nav-menu__element">Магічні предмети</a></li>
          <li><a href="/bestiary" className="Nav-menu__element">Бестіарій</a></li>
          <li><a href="/spells" className="Nav-menu__element">Заклинання</a></li>
          <li><a href="/tools" className="Nav-menu__element">Інструменти</a></li>
          <li><a href="/news" className="Nav-menu__element">Новини</a></li>
        </ul>
      </nav>
    </div>
  );
};
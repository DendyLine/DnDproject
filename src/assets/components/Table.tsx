import { NavLink } from 'react-router-dom';


interface ITableProps{
  tiles: {id: number,
  name: string,
  classname: string,
  link: string,}[]
}

export const Table = ({tiles}: ITableProps) => {
  return(
    <div className='Table'>
      {tiles.map(tile => <NavLink className={tile.classname} to={tile.link}>{tile.name}</NavLink>)}
    </div>
  )
}
{/*<NavLink to='/races' className="Table__tile">Раси</NavLink>*/}
{/*<NavLink to='/classes' className="Table__tile">Класи</NavLink>*/}
{/*<NavLink to='/features' className="Table__tile">Властивості</NavLink>*/}
{/*<NavLink to='/histories' className="Table__tile">Передісторії</NavLink>*/}
{/*<NavLink to='/weapon' className="Table__tile">Зброя</NavLink>*/}
{/*<NavLink to='/armor' className="Table__tile">Обладунки</NavLink>*/}
{/*<NavLink to='/equipment' className="Table__tile">Спорядження</NavLink>*/}
{/*<NavLink to='/artifacts' className="Table__tile">Магічні предмети</NavLink>*/}
{/*<NavLink to='/bestiary' className="Table__tile">Бестіарій</NavLink>*/}
{/*<NavLink to='/spells' className="Table__tile">Заклинання</NavLink>*/}
{/*<NavLink to='/tools' className="Table__tile">Інструменти</NavLink>*/}
{/*<NavLink to='/news' className="Table__tile">Новини</NavLink>*/}
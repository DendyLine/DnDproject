import { NavLink } from 'react-router-dom';


interface ITableProps{
  tiles: {id: number,
  name: string,
  classname: string,
  link: string,}[],
  showNavMenu: boolean,
}

export const Table = (props: ITableProps) => {


  return(
    <div className={`Table ${props.showNavMenu ? '' : 'Table--expanded'}`}>
      {/*<button onClick={handleClick}>left</button>*/}
      {props.tiles.map(tile => <NavLink className={tile.classname} to={tile.link}>{tile.name}</NavLink>)}
    </div>
  )
}

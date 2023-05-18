import { NavLink } from 'react-router-dom';


interface ITableProps{
  tiles: {id: string,
  name: string,
  link: string,}[],
  classname: string | undefined,
 }

export const Table = (props: ITableProps) => {


  return(
    <div className={`Table ${props.classname}`}>
      {props.tiles.map(tile => <NavLink className='Table__tile' to={tile.link}>{tile.name}</NavLink>)}
    </div>
  )
}

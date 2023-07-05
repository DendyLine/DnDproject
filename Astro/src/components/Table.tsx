
interface ITableProps{
  tiles: {id: string,
  name: string,
  link: string,}[],
  className: string | undefined,
 }

export const Table = (props: ITableProps) => {


  return(
    <div className={`Table ${props.className}`}>
      {props.tiles.map(tile => <a className='Table__tile' href={tile.link}>{tile.name}</a>)}
    </div>
  )
}

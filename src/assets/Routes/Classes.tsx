import { Searchbar, Table } from '../components';
import { useAppSelector } from '../redux/store';


interface IContentProps {
  toggleNavMenu: ()=> void
  showNavMenu: boolean;
}
export const Classes = (props: IContentProps) => {
  const tiles = useAppSelector(state => state.classes.tiles);
  return(
    <div className='content'>
      <button className='content__expander' onClick={props.toggleNavMenu}>{props.showNavMenu ? <div>&lt;</div> : <div>&gt;</div>}</button>
      <div className='content__action-block'>
        <div className='content__action-block__header'><h2>Класи</h2></div>
        <div className='content__action-block__footer'>
          <Searchbar/>
          <Table showNavMenu={props.showNavMenu} tiles={tiles}/>
        </div>
      </div>
    </div>
  )
}
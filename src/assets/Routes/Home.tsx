import {InfoBlock, Searchbar, Table } from '../components';
import { useAppSelector } from '../redux/store';


export const Home = () => {
  const tiles = useAppSelector(state => state.home.tiles);
  return(
    <div>
      <main className='Home'>
        <InfoBlock/>
        <div className="Home__Action-block">
          <div className='Home__Action-block__header'>
            <Searchbar/>
          </div>
          <Table classname='' tiles={tiles}/>
        </div>
      </main>
    </div>
  )
}
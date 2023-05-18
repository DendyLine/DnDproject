import {Searchbar, Table} from '../components';
import {useAppSelector} from '../redux/store';
import {Outlet, useLocation, NavLink} from "react-router-dom";


interface IContentProps {
    toggleNavMenu: () => void
    showNavMenu: boolean;
}

export const Races = (props: IContentProps) => {
    const tiles = useAppSelector(state => state.races.tiles);
    const location = useLocation()
    const tableTileId = location.pathname.split('/races').pop();
    const showTable = !tableTileId || !props.showNavMenu;
    let tableClassName;
    if(props.showNavMenu){
        tableClassName = ''
    }else if(tableTileId){
        tableClassName = 'Table--reduced'
    }else if(showTable){
        tableClassName = 'Table--expanded'
    }
    return (
        <div className='content'>
            <button className='content__expander' onClick={props.toggleNavMenu}>{props.showNavMenu ? <div>&lt;</div> : <div>&gt;</div>}</button>
            <div className='content__action-block'>
                <div className='content__action-block__header'><NavLink to='/races'><h2>Раси</h2></NavLink></div>
                <div className='content__action-block__footer'>
                    <Searchbar/>
                    <div className='content__action-block__footer--expand'>
                        <Outlet/>
                        {showTable && <Table tiles={tiles} classname={tableClassName}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
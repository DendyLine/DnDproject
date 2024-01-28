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
    let tableClassName;
    let contentActionBlockFooterExpand;
    let raceClassname;
    if(tableTileId && props.showNavMenu){
       tableClassName='Table--row'; contentActionBlockFooterExpand = 'content__action-block__footer--reduced'; raceClassname = 'race--reduced'
    }else if(tableTileId && !props.showNavMenu){
        tableClassName = 'Table--reduced'
    }else if(!tableTileId && !props.showNavMenu){
        tableClassName = 'Table--expanded'
    }
    return (
        <div className='content'>
            <button className='content__expander' onClick={props.toggleNavMenu}>{props.showNavMenu ? <div>&lt;</div> : <div>&gt;</div>}</button>
            <div className='content__action-block'>
                <div className='content__action-block__header'><NavLink to='/races'><h2>Раси</h2></NavLink></div>
                <div className='content__action-block__footer'>
                    <Searchbar races={tiles}/>
                    <div className={`content__action-block__footer--expand ${contentActionBlockFooterExpand}`}>
                        <Outlet context={raceClassname}/>
                        <Table tiles={tiles} classname={tableClassName}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
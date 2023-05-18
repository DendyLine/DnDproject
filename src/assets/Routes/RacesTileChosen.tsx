import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

export const RacesTileChosen = () => {
    const { id } = useParams();
    const races = useAppSelector(state => state.races.tiles);
    const race = races.find(race => race.id === id);
    return (
        <div className='RacesTileChosen'>
            {race ? race.name : 'Раса не знайдена'}
        </div>
    );
};

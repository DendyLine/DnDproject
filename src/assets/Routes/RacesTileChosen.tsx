import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

export const RacesTileChosen = () => {
    const { id } = useParams();
    const races = useAppSelector(state => state.races.tiles);
    const race = races.find(race => race.id === id);
    return (
        <div className='race'>
                <div className='race__picture'><img src={race!.imgSrc} alt={race!.imgAlt}/></div>
                <div className='race__basic'>
                    <div className='race__basic__title'>{race!.name}</div>
                    <div className='race__basic__info'>
                        <div className='race__option'><b>Тип:</b> {race!.type}</div>
                        <div className='race__option'><b>Характеристики:</b> {race!.char}</div>
                        <div className='race__option'><b>Розмір:</b> {race!.size}</div>
                        <div className='race__option'><b>Швидкість:</b> {race!.speed}</div>
                        <div className='race__option'><b>Особливості:</b> {race!.traits}</div>
                        <div className='race__option'><b>Мови:</b> {race!.languages}</div>
                        <div className='race__option'><b>Тривалість життя:</b> {race!.lifeDur}</div>
                        <div className='race__option'><b>Світогляд:</b> {race!.ideology}</div>
                    </div>
                </div>
                <div className='race__desc'>Опис
                    <p>
                        {race!.desc}
                    </p>
                </div>
            </div>
    );
};

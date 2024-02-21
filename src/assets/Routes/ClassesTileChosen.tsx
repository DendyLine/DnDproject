import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/store';


export const ClassesTileChosen = () => {
    const { id } = useParams();
    const classes = useAppSelector(state => state.classes.tiles);
    const oneClass = classes.find(oneClass => oneClass.id === id);
    return(
        <div className='oneClass'>
            hello world
        </div>
    )
}
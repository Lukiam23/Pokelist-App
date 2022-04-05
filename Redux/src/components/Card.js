
import { useNavigate } from 'react-router-dom'
import {CardStyle} from './style';
import {useDispatch} from 'react-redux';
import setDetail from '../actionCreators/setDetail'

function Card({pokemon}){
    const {name, path} = pokemon;
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const setPokemonData = (detail) => dispatch(setDetail(detail));


    const detailPage = (pokemon) => {
        setPokemonData(pokemon);
        navigate('detail')
    }
    
    return(
        <CardStyle data-testid="card" onClick={() => detailPage(pokemon)}>
            <img src={path} alt={name} />
            <p>{name}</p>
        </CardStyle>
    );

}

export default Card;
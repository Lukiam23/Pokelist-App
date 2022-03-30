
import { useNavigate } from 'react-router-dom'
import { useCardContext } from './CardContextProvider';
import {CardStyle} from './style';

function Card({pokemon}){
    const {name, path} = pokemon;
    let navigate = useNavigate();
    const {setPokemonData} = useCardContext();


    const detailPage = (pokemon) => {
        setPokemonData(pokemon);
        navigate('detail')
    }
    
    return(
        <CardStyle  onClick={() => detailPage(pokemon)}>
            <img src={path} alt={name} />
            <p>{name}</p>
        </CardStyle>
    );

}

export default Card;
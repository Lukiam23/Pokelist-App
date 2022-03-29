import style from "../css/Card.module.css";
import { useNavigate } from 'react-router-dom'
import { useCardContext } from './CardContextProvider';

function Card({pokemon}){
    const {name, path} = pokemon;
    let navigate = useNavigate();
    const {setPokemonData} = useCardContext();


    const detailPage = (pokemon) => {
        setPokemonData(pokemon);
        navigate('detail')
    }
    
    return(
        <div className={style.card} onClick={() => detailPage(pokemon)}>
            <img src={path} alt={name} />
            <p>{name}</p>
        </div>
    );

}

export default Card;
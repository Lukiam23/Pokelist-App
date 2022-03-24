import style from "../css/Detail.module.css";
import { useCardContext } from './CardContextProvider';

function Detail({pokemon}){
    const {pokemonData} = useCardContext();
    return <div className={style.container} >Olá {pokemonData.name}</div>
}

export default Detail;
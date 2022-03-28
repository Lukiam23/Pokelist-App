import { useEffect } from "react"
import Card from "./Card";
import style from "../css/PokemonList.module.css";
import { useCardContext } from './CardContextProvider';
import Pokemons from '../db.json'
import { useNavigate } from 'react-router-dom'

function PokemonList(){
    const {pokeCards, setPokeCards} = useCardContext();
    const {pokemons} = Pokemons;
    let navigate = useNavigate();

    const detailPage = () => {
        navigate('detail')
    }
    

    useEffect(() =>{
        setPokeCards(pokemons.map(({name, ...otheos}) =><Card key={name} redirectFunc={() => detailPage()} name={name.replace(/.png/g,"")} path={`images\\${name}`}/> ))
         
    }, [pokemons,setPokeCards]);

    
    return(
        <div id="cardContainer" className={style.container}>
            {pokeCards}
        </div>
    );
}

export default PokemonList;
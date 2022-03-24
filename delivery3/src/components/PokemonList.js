import { useEffect } from "react"
import Card from "./Card";
import style from "../css/PokemonList.module.css";
import { useCardContext } from './CardContextProvider';
import Pokemons from '../db.json'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';

function PokemonList(){
    const {pokeCards, setPokeCards, setPokemonData} = useCardContext();
    const {pokemons} = Pokemons;
    let navigate = useNavigate();

    const detailPage = (pokemon) => {
        setPokemonData(pokemon);
        navigate('detail')
    }
    

    useEffect(() =>{
        setPokeCards(pokemons.map(({name, ...others}) =><Card key={name} redirectFunc={() => detailPage({name, ...others})} name={name.replace(/.png/g,"")} path={`images\\${name}`}/> ))
         
    }, [pokemons,setPokeCards]);

    
    return(
        <div id="cardContainer" className={style.container}>
            {pokeCards}
        </div>
        
    );
}

export default PokemonList;
import { useEffect } from "react"
import Card from "./Card";
import style from "../css/PokemonList.module.css";
import { useCardContext } from './CardContextProvider';
import Pokemons from '../db.json'
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';

function PokemonList(){
    const {pokeCards, setPokeCards} = useCardContext();
    const {pokemons} = Pokemons;
        

    useEffect(() =>{
        setPokeCards(pokemons.map((pokemon) =><Card key={pokemon.name} pokemon={pokemon}/> ))
         
    }, [pokemons,setPokeCards]);

    
    return(
        <div id="cardContainer" className={style.container}>
            {pokeCards}
        </div>
        
    );
}

export default PokemonList;
import { useState, useEffect, useContext } from "react"
import Card from "./Card";
import style from "../css/PokemonList.module.css";
import { useCardContext } from './CardContextProvider';
import Pokemons from '../db.json'

function PokemonList(){
    const {pokeCards, setPokeCards} = useCardContext();
    const pokemonList = [ 'Arcanine.png','Beedrill.png', 'Blastoise.png','Bulbasaur.png', 
    'Butterfree.png','Caterpie.png', 'Charizard.png','Charmander.png', 'Charmeleon.png',
    'Clefable.png', 'Dewgong.png',  'Farfetchd.png', 'Golbat.png', 'Ivysaur.png', 
    'Kadabra.png',  'Kakuna.png', 'Metapod.png', 'Pidgeot.png', 'Pidgeotto.png','Pidgey.png', 
    'Pikachu.png',  'Ponyta.png', 'Raichu.png', 'Raticate.png', 'Rattata.png',  'Squirtle.png', 
    'Venusaur.png', 'Vulpix.png', 'Wartortle.png','Weedle.png']
    console.log(Pokemons.pokemons)
    useEffect(() =>{
        setPokeCards(Pokemons.pokemons.map(({name}) =><Card key={name} name={name.replace(/.png/g,"")} path={`images\\${name}`}/> ))
    }, []);

    
    return(
        <div id="cardContainer" className={style.container}>
            {pokeCards}
        </div>
    );
}

export default PokemonList;
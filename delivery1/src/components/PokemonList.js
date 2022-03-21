import { useState, useEffect } from "react"
import Card from "./Card";
import style from "../css/PokemonList.module.css";

function PokemonList(){
    const [pokemonList, setPokemonList] = useState([ 'Arcanine.png','Beedrill.png', 'Blastoise.png','Bulbasaur.png', 
    'Butterfree.png','Caterpie.png', 'Charizard.png','Charmander.png', 'Charmeleon.png',
    'Clefable.png', 'Dewgong.png',  'Farfetchd.png', 'Golbat.png', 'Ivysaur.png', 
    'Kadabra.png',  'Kakuna.png', 'Metapod.png', 'Pidgeot.png', 'Pidgeotto.png','Pidgey.png', 
    'Pikachu.png',  'Ponyta.png', 'Raichu.png', 'Raticate.png', 'Rattata.png',  'Squirtle.png', 
    'Venusaur.png', 'Vulpix.png', 'Wartortle.png','Weedle.png'])
    

    return(
        <div className={style.container}>
            {pokemonList.map(poke =><Card key={poke} name={poke}/> )}
        </div>
    );
}

export default PokemonList;
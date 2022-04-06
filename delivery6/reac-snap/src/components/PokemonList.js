import { useEffect } from "react"
import Card from "./Card";
import { useCardContext } from './CardContextProvider';
import usePokemons from './usePokemons'
import {CardContainer} from './style';



function PokemonList(){
    const {pokeCards, setPokeCards} = useCardContext();
    const [pokemons, errors] = usePokemons();      

    useEffect(() =>{
        if(pokemons && pokeCards.length === 0){
            setPokeCards(pokemons.map((pokemon) =><Card key={pokemon.name} pokemon={pokemon}/> ))
        }
         
    }, [pokemons,setPokeCards]);

    
    return(
        <CardContainer data-testid="cardContainer">
            {pokeCards}
        </CardContainer>
        
    );
}

export default PokemonList;
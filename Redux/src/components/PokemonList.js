import { useEffect } from "react"
import Card from "./Card";
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import usePokemons from './usePokemons'
import {CardContainer} from './style';
import {useSelector, useDispatch} from 'react-redux';
import addCard from '../actionCreators/addCard'


function PokemonList(){
    const pokeCards = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const setPokeCards = (card) => dispatch(addCard(card));
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
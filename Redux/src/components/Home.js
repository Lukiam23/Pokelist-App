import { useEffect } from "react"
import Card from "./Card";
import usePokemons from '../fetchs/usePokemons'
import {CardContainer} from './style';
import {useSelector, useDispatch} from 'react-redux';
import addCard from '../actionCreators/addCard'


function Home(){
    const pokeCards = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const setPokeCards = (card) => dispatch(addCard(card));
    const [pokemons, errors] = usePokemons();      

    useEffect(() =>{
        if(pokemons && pokeCards.length === 0){
            setPokeCards(pokemons.map((pokemon) =><Card key={pokemon.name} pokemon={pokemon} /> ))
        }
         
    }, [pokemons,setPokeCards]);

    
    return(
        <CardContainer data-testid="cardContainer">
            {pokeCards}
        </CardContainer>
        
    );
}

export default Home;
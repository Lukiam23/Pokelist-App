import { useState, useContext, createContext } from "react";
import Card from "../components/Card";

const MockCardContext = createContext();

function MockProvider({children}){

	const [pokemonData, setPokemonData] = useState({name:'bulbasor', path:'image/bulbasor.png', type:'plant'});
    const [pokeCards, setPokeCards] = useState([<Card pokemon={{name:'bulbasor', path:'image/bulbasor.png', type:'plant'}} />])

    return (
		<MockCardContext.Provider value = {{pokeCards, setPokeCards, pokemonData, setPokemonData}}>
			{children}
		</MockCardContext.Provider>
	);

}

function useCardContext(){

	return useContext(MockCardContext)
}

export {MockProvider};
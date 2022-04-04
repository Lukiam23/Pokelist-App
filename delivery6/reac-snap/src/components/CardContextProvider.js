import { useState, useContext, createContext } from "react";

export const CardContext = createContext();

export default function CardContextProvider({children}){

	const [pokemonData, setPokemonData] = useState();
    const [pokeCards, setPokeCards] = useState([])

    return (
		<CardContext.Provider value = {{pokeCards, setPokeCards, pokemonData, setPokemonData}}>
			{children}
		</CardContext.Provider>
	);

}

export function useCardContext(){

	return useContext(CardContext)
}
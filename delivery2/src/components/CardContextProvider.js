import { useState, useContext, createContext } from "react";

const CardContext = createContext();

export default function CardContextProvider({children}){
    const [pokeCards, setPokeCards] = useState()

    return (
		<CardContext.Provider value = {{pokeCards, setPokeCards}}>
			{children}
		</CardContext.Provider>
	);

}

export function useCardContext(){

	return useContext(CardContext)
}
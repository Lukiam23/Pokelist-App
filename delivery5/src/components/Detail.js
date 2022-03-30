import { useNavigate } from 'react-router-dom'
import { useCardContext } from './CardContextProvider';
import { useEffect, useMemo } from "react";
import {DetailContainer, Frame} from './style';

function Detail(){
    const {pokemonData} = useCardContext();
    let navigate = useNavigate();
    
    useEffect(() =>{
        if(pokemonData === undefined) navigate('/')
    }, [pokemonData, navigate])
    
    if(pokemonData === undefined) return null;
    
    const {name, path, type} = pokemonData;
    const types = type.split(" ")
    
    
    const printTypes = () =>{
        let resp = ""
        if(types.length === 1) return `${types[0]}.`
        for(let index = 0; index<types.length; index++){
            if(index === types.length - 1){
                resp += `and ${types[index]}`
            } else {
                resp += `${types[index]}, `
            }
        }

        return resp;
    }

    return (
    
    <DetailContainer>
        <div>
            <h1>{name}</h1>
            <img src={path} alt={name} />
            <p>The {name} is a pokemon from the {(types.length > 1)? "types": "type"} {printTypes()}</p>
        </div>
    </DetailContainer>
   );
}

export default Detail;
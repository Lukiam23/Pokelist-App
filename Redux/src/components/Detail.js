import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import {DetailContainer} from './style';


function Detail(){
    const pokemonData = useSelector(state => state.detail);
    let navigate = useNavigate();
    
    useEffect(() =>{
        if(pokemonData === undefined || Object.keys(pokemonData).length === 0 || pokemonData === null ) navigate('/');
    }, [])

    const {name, path} = pokemonData;

    if(pokemonData === undefined || Object.keys(pokemonData).length === 0 || pokemonData === null ) return null;
    
    
    const printtypeArray = ({type}) =>{
        const typeArray = type.split(' ');
        let resp = "type "
        if(typeArray.length === 1) return `type ${typeArray[0]}.`
        for(let index = 0; index<typeArray.length; index++){
            if(index === typeArray.length - 1){
                resp += `and ${typeArray[index]}`
            } else {
                resp += `${typeArray[index]}, `
            }
        }

        return resp;
    }

    return (
    
    <DetailContainer>
        <div data-testid="detail">
            <h1>{name}</h1>
            <img src={path} alt={name} />
            <p>The {name} is a pokemon from the {printtypeArray(pokemonData)}</p>
        </div>
    </DetailContainer>
   );
}

export default Detail;
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useMemo, useContext } from "react";
import {DetailContainer, Frame} from './style';


function Detail(){
    const pokemonData = useSelector(state => state.detail);
    let navigate = useNavigate();
    
    useEffect(() =>{
        if(pokemonData === undefined) navigate('/')
        window.scrollTo(0, 0)
    }, [pokemonData, navigate])
    
    if(pokemonData === undefined) return null;
    
    const {name, path, type} = pokemonData;
    const types = type.split(" ")
    
    
    const printTypes = () =>{
        let resp = "types "
        if(types.length === 1) return `type ${types[0]}.`
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
        <div data-testid="detail">
            <h1>{name}</h1>
            <img src={path} alt={name} />
            <p>The {name} is a pokemon from the {printTypes()}</p>
        </div>
    </DetailContainer>
   );
}

export default Detail;
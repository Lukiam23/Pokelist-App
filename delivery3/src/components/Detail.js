import style from "../css/Detail.module.css";
import { useNavigate } from 'react-router-dom'
import { useCardContext } from './CardContextProvider';
import { useEffect, useMemo } from "react";

function Detail(){
    const {pokemonData} = useCardContext();
    let navigate = useNavigate();
    
    useEffect(() =>{
        if(pokemonData === undefined) navigate('/')
    }, [pokemonData, navigate])
    
    if(pokemonData === undefined) return null;
    
    const {name, path} = pokemonData;

    return (
    <div  className={style.container} >
        <div  className={style.frame} >
        <h1>{name}</h1>
        <img src={path} alt={name} />
        </div>
    </div>);
}

export default Detail;
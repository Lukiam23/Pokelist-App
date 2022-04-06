
import {HeaderStyle, MenuButton, ButtonFrame} from './style';
import Loadable from "react-loadable";

import React, {useState} from 'react';
import { useCardContext } from "./CardContextProvider";
import { useNavigate } from 'react-router-dom';


const Card = Loadable({
    loader:() => import('./Card'),
    loading(){ return <h1>Loading</h1>}
})

const Modal = Loadable({
    loader:() => import('./Modal'),
    loading(){ return <h1>Loading</h1>}
})


function Header(){
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const {setPokeCards} = useCardContext()
    const alterModal = () => {
        setShowModal(!showModal);
    };
    const addPoke = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const newCard = <Card key={name} pokemon={{name:name, path: "images/Pikachu.png", type:"Unkown"}} />
        
        setPokeCards((old)=>{
            return [...old,newCard]
        })

        alterModal()     
    }

    const goHome = () =>{
        navigate('/')
    }

    return(
        <>
        <HeaderStyle>
            <nav>
                <MenuButton onClick={goHome} data-testid="home-button">Home</MenuButton>
                <ButtonFrame onClick={alterModal} data-testid="add-button">+</ButtonFrame>
            </nav>
        </HeaderStyle>

        {
            showModal? 
            <Modal closeModal={alterModal}>
                <span onClick={alterModal} ><img src="close.png" alt="close button"/></span>
                <form 
                onSubmit={e => addPoke(e)} 
                encType="multipart/form-data">
                    <img src="images/Pikachu.png" alt="default"/>
                    <input 
                    data-testid="pokemon-name"
                    type="text" 
                    id="name" 
                    placeholder="Pokemon's name"/>
                    <input data-testid="submit" type="submit" />
                </form>
            </Modal> : null
        }
        </>
    );
}

export default Header;
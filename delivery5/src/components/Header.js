import Modal from "./Modal";
import {HeaderStyle, MenuButton, ButtonFrame} from './style';
import Card from "./Card";
import React, {useEffect, useState} from 'react';
import { useCardContext } from "./CardContextProvider";
import { useNavigate } from 'react-router-dom';


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
                <MenuButton onClick={goHome} >Home</MenuButton>
                <ButtonFrame onClick={alterModal} >+</ButtonFrame>
            </nav>
        </HeaderStyle>

        {
            showModal? 
            <Modal closeModal={alterModal}>
                <span onClick={alterModal} ><img src="close.png"/></span>
                <form onSubmit={e => addPoke(e)} encType="multipart/form-data">
                    <img src="images/Pikachu.png" alt="default"/>
                    <input type="text" id="name" placeholder="Pokemon's name"/>
                    <input type="submit" />
                </form>
            </Modal> : null
        }
        </>
    );
}

export default Header;
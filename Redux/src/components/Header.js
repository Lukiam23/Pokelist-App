import Modal from "./Modal";
import {HeaderStyle, MenuButton, ButtonFrame} from './style';
import Card from "./Card";
import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import addCard from '../actionCreators/addCard'


function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const setPokeCards = (card) => dispatch(addCard(card))
    const alterModal = () => {
        setShowModal(!showModal);
    };
    const addPoke = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const newCard = <Card key={name} pokemon={{name:name, path: "images/Pikachu.png", type:"Unkown"}} />
        
        setPokeCards(newCard)

        alterModal()     
    }

    const goHome = () =>{
        navigate('/')
    }

    return(
        <>
        <HeaderStyle>
            <div onClick={goHome}><h1>Pokedex</h1></div>
            <nav>
                <MenuButton onClick={goHome} data-testid="home-button"><img src="home.png" alt="home button" title="Home" /></MenuButton>
                <MenuButton onClick={alterModal} data-testid="add-button"><img src="add.png" alt="add button" title="Add pokemon"/></MenuButton>
            </nav>
        </HeaderStyle>

        {
            showModal? 
            <Modal closeModal={alterModal}>
                <span onClick={alterModal} ><img src="close.png"/></span>
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
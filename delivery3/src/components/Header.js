import style from "../css/Header.module.css";
import Modal from "./Modal";
import Card from "./Card";
import React, {useEffect, useState} from 'react';
import { useCardContext } from "./CardContextProvider";
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'


function Header(){
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const {pokeCards, setPokeCards} = useCardContext()
    const alterModal = () => setShowModal(!showModal);
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
        <header>
            <nav>
                <div onClick={goHome} className={style.menuButton}>Home</div>
                <div onClick={alterModal} className={cx(style.menuButton, style.frame)} >+</div>
            </nav>
        </header>
        {
            showModal? 
            <Modal>
                <form className={style.form} onSubmit={e => addPoke(e)} encType="multipart/form-data">
                    <img src="images/Pikachu.png" alt="default"/>
                    <input type="text" id="name" placeholder="Pokemon's name"/>
                    <input type="submit" />
                </form>
                <button onClick={alterModal} >Cancel</button>
            </Modal> : null
        }
        </>
    );
}

export default Header;
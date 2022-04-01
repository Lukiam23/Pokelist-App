import React, {useRef, useEffect} from "react";
import {createPortal} from 'react-dom';
import {ModalStyle} from './style';

const Modal = ({children, closeModal}) => {
    
    useEffect(() =>{
        const div = (<div></div>)    
        const modalRoot = (<div id="modal"></div>)
       
    }, [])

    return <ModalStyle onClick={closeModal}><div onClick={(event) => {event.stopPropagation()}}>{children}</div></ModalStyle>
}

export default Modal;
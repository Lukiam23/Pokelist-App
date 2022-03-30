import React, {useRef, useEffect} from "react";
import {createPortal} from 'react-dom';
import {ModalStyle} from './style';

const Modal = ({children, closeModal}) => {
    const elRef =  useRef(null);
    if(!elRef.current){
        const div = document.createElement('div')
        elRef.current = div
    }
    
    useEffect(() =>{
        const modalRoot = document.getElementById('modal')
        modalRoot.appendChild(elRef.current)

         return () => modalRoot.removeChild(elRef.current)
    }, [])

    return createPortal(<ModalStyle onClick={closeModal}><div onClick={(event) => {event.stopPropagation()}}>{children}</div></ModalStyle>, elRef.current)
}

export default Modal;
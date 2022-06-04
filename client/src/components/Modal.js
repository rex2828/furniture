import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = props => {

    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(uiActions.toggleCartVisibility())
    }

    return <>
        {ReactDOM.createPortal(<Backdrop onClose={toggleCartHandler} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;
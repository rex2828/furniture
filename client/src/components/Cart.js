import React from 'react'
import Modal from './Modal'
import classes from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { uiActions } from '../store/ui-slice'
const Cart = () => {

    const dispatch = useDispatch()

    const items = useSelector(state => state.cart.items)

    const closeButtonHandler = () => {
        dispatch(uiActions.toggleCartVisibility())
    }

    return (
        <Modal>
            <ul>
                {items.length ? items.map((item) => {
                    return <CartItem key={item.id} id={item.id} title={item.title} totalQuantity={item.totalQuantity} totalPrice={item.totalPrice} price={item.price} image={item.image} alt={item.alt} />
                }) : <p>No items in the cart</p>}

            </ul>
            <div className={classes.buttonSection}>
                <button type='button' onClick={closeButtonHandler} className={classes.closeCart}>Close</button>
            </div>
        </Modal>
    )
}

export default Cart
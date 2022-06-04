import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './CartItem.module.css';
const CartItem = ({ id, title, totalQuantity, totalPrice, price, image, alt }) => {

    const dispatch = useDispatch()
    const addButtonHandler = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image,
            alt,
            price,
        }))
    }

    const removeButtonHandler = () => {
        dispatch(cartActions.removeItem(id))
    }

    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.leftContainer}>
                    <img src={image} alt={alt} className={classes.image} />
                </div>
                <div className={classes.rightContainer}>
                    <span className={classes.title}>{title}</span>
                    <span className={classes.totalQuantity}>{totalQuantity} * ₹{price}</span>
                    <span className={classes.totalPrice}>₹{totalPrice}</span>
                    <div className={classes.handlerSection}>
                        <button type='button' onClick={removeButtonHandler} className={classes.button}>-</button>
                        <button type='button' onClick={addButtonHandler} className={classes.button}>+</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './Card.module.css';

const Card = ({ id, title, image, alt, price, discount, rating, shipsIn }) => {

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image,
            alt,
            price,
        }))
    }

    return (
        <div className={classes.card}>
            <div className={classes.imageContainer}>
                <img src={image} alt={alt} className={classes.image} />
                <button className={classes.button} type="button" onClick={addToCartHandler}>Add to Cart</button>
            </div>
            <span className={classes.title}>{title}</span>
            <span className={classes.price}>₹{price}</span>
            <span className={classes.discount}>{discount}% Off</span>
            <span className={classes.shipsIn}>Ships in {shipsIn} {shipsIn === 1 ? 'day' : 'days'}</span>
        </div>
    )
}

export default Card
import React from 'react'
import classes from './Filter.module.css'
const Filter = ({ filterbarChangeHandler }) => {

    const radiobuttonHandler = (e) => {
        filterbarChangeHandler(e.target.value)
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <label className={classes.label}>Lowest price first<input type="radio" name='radio' value="price" onChange={radiobuttonHandler} /></label>
                <label className={classes.label}>Fastest shiping<input type="radio" name='radio' value="shipdate" onChange={radiobuttonHandler} /></label>
                <label className={classes.label}>Most discount<input type="radio" name='radio' value="discount" onChange={radiobuttonHandler} /></label>
            </div>
        </div>
    )
}

export default Filter
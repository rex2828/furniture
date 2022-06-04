import React, { useState } from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import { dataArray } from '../data/dummyData'
import classes from './Home.module.css'
const Home = () => {

    const [data, setData] = useState(dataArray)

    const mappedItems = data.map((item) => {
        return <Card key={item.id} id={item.id} title={item.title} image={item.image} alt={item.alt} price={item.price} discount={item.discount} rating={item.rating} shipsIn={item.shipsIn} />
    })

    const filterbarChangeHandler = (radioValue) => {
        const sortedArray = dataArray.slice()
        if (radioValue === 'price') {
            sortedArray.sort((a, b) => {
                return a.price - b.price
            })
            setData(sortedArray)
        }
        if (radioValue === 'shipdate') {
            sortedArray.sort((a, b) => {
                return a.shipsIn - b.shipsIn
            })
            setData(sortedArray)
        } if (radioValue === 'discount') {
            sortedArray.sort((a, b) => {
                return b.discount - a.discount
            })
            setData(sortedArray)
        }
    }

    return (
        <>
            <Filter filterbarChangeHandler={filterbarChangeHandler} />
            <div className={classes.itemContainer}>{mappedItems}</div>
        </>
    )
}

export default Home;
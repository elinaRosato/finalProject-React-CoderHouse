import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import '../App.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([
        {id:1, title:"avena", description:"avena arrollada organica glutenfree", price:41, stock:4, image:'./behance_1.jpg'},
        {id:2, title:"leche de almendras", description:"leche vegetal 100% natural", price:35, stock:10, image:'.../behance_1.jpg'},
        {id:3, title:"granola", description:"granola crijiente natural sin azucar", price:67, stock:7, image:'..../behance_1.jpg'}
    ]) 
    return (
        <>
            <div className='greeting-container'>
                <h1 className='greeting'>{greeting}</h1>
            </div>
            <div className="item-list-container">
                <ItemList 
                    products={products} 
                />
            </div>
        </>
    )
}

export default ItemListContainer;
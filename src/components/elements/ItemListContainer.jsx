import React, {useState, useEffect} from 'react';
import { ItemList } from '../../components';


const ItemListContainer = () => {
    const [products, setProducts] = useState([
        {id:1, title:"avena", description:"avena arrollada organica glutenfree", price:41, stock:4, image:'../'},
        {id:2, title:"leche de almendras", description:"leche vegetal 100% natural", price:35, stock:10, image:'./assets/behance_1'},
        {id:3, title:"granola", description:"granola crijiente natural sin azucar", price:67, stock:7, image:'./assets/behance_1'},
        {id:4, title:"avena", description:"avena arrollada organica glutenfree", price:41, stock:4, image:'./assets/behance_1'},
        {id:5, title:"leche de almendras", description:"leche vegetal 100% natural", price:35, stock:10, image:'./assets/behance_1'},
        {id:6, title:"granola", description:"granola crijiente natural sin azucar", price:67, stock:7, image:'./assets/behance_1'}
    ]) 
    return (
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer;
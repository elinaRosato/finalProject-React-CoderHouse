import React, {useState, useEffect} from 'react';
import Item from './Item';
import '../App.css';

const ItemList = (props) => {
    
    const [products, setProducts] = useState([
        {id:1, title:"avena", description:"avena arrollada organica glutenfree", price:41, stock:4, image:'./behance_1.jpg'},
        {id:2, title:"leche de almendras", description:"leche vegetal 100% natural", price:35, stock:10, image:'.../behance_1.jpg'},
        {id:3, title:"granola", description:"granola crijiente natural sin azucar", price:67, stock:7, image:'..../behance_1.jpg'}
    ]) 

    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ({products});
        }, 2000);
    }) 
    
    promise.then(result => {
        return (result)
    }).catch(() => {
        return (
            <p>There was an error loading the products.</p>
        )
    }).finally(() => {
        console.log("Promise finished")
        console.log({products})
    })

    console.log(products)

    return (
        products.map(product => {
            return <Item id={product.id} title={product.title} stock={product.stock} description={product.description} price={product.price} image={product.image}/>
        })
    );
}


export default ItemList;
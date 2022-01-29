import React, {useState, useEffect} from 'react';
import Item from './Item';
import '../App.css';

const ItemList = () => {
    const [products, setProducts] = useState([
        {id:1, name:"avena", description:"avena arrollada organica glutenfree", price:41, stock:4, pictureURL:'./behance_1.jpg'},
        {id:2, name:"leche de almendras", description:"leche vegetal 100% natural", price:35, stock:10, pictureURL:'.../behance_1.jpg'},
        {id:3, name:"granola", description:"granola crijiente natural sin azucar", price:67, stock:7, pictureURL:'..../behance_1.jpg'}
    ])

    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (products);
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
    })

    return (
        products.map(product => {
            return <Item productName={product.name} stock={product.stock} productDescription={product.description} productPrice={product.price} productPictureURL={product.pictureURL}/>
        })
    );
}


export default ItemList;
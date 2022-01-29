import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import '../App.css';




const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className='greeting-container'>
                <h1 className='greeting'>{greeting}</h1>
            </div>
            <div className="item-list-container">
                <ItemList productName='x' productBrand='x' stock='x' productDescription='x' productPrice='x' productPictureURL='x' />
            </div>
        </>
    )
}

export default ItemListContainer;
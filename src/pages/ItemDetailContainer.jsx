import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([
        {id:1, title:"avena", description:"avena arrollada organica glutenfree", price:41, stock:4, image:'./behance_1.jpg'},
        {id:2, title:"leche de almendras", description:"leche vegetal 100% natural", price:35, stock:10, image:'.../behance_1.jpg'},
        {id:3, title:"granola", description:"granola crijiente natural sin azucar", price:67, stock:7, image:'..../behance_1.jpg'}
    ])     
    const [product, setProduct] = useState(null);
    const getItem = (itemId) => {
        return fetch(products.find(product => {
            return product.id === itemId
        }))
    }
    console.log(product)

    useEffect(() => {
        let mounted = true
        Promise.all([ getItem(id) ])
        .then(results => {
            let item = results[0]
            if (mounted) {
                setProduct(item)
            }
        })
        return () => mounted = false
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} /> : null }
        </div>
    )
}

export default ItemDetailContainer;

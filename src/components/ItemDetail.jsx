import { Link } from "react-router-dom";
import { useState } from 'react';
import ItemCount from './elements/ItemCount';

const ItemDetail = ({ product }) => {

    const { id, title, description, price, stock, image} = product
    const [itemsQty, setItemsQty] = useState(0);
    console.log(product)

    return (
        <div className="product-detail-container">
            <div className="product-detail-header">
                <Link to="/" className="btn btn-link">Volver atras</Link>
            </div>
            <div className="product-detail-body">
                <div className="product-info">
                    <div className="product-image">
                        <img src={image} alt="" /> 
                    </div>
                    <div className="product-description" >
                        <h2 className="mb-5">Description</h2>
                        {description}
                    </div>
                </div>
                <div className="product-payment-details">
                    <p className="product-stock"><small>Only {stock} left! </small></p>
                    <h4 className="product-title">{title}</h4>
                    <h2 className="product-price">$ {price}</h2>                              
                    <label for="quant">Cantidad</label>
                    <div>
                        <ItemCount itemsQty={itemsQty} stock={stock} setItemsQty={setItemsQty} />
                    </div>
                    <button variant="primary">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
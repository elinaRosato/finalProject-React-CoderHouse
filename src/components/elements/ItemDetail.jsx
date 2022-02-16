import { Link } from "react-router-dom";
import { useState } from 'react';
import { ItemCount } from '../../components';
import CardContainer from "../styled/CardContainer.styled";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

    const { id, title, description, price, stock, image} = product
	const [qty, setQty] = useState(0);
	const [cart, setCart] = useCart();
	const addToCart = (product, qty) => {
		const productIndex = cart.indexOf(product);
		console.log(productIndex)
		if (productIndex===-1) {
			product.qty =  qty;
			setCart([...cart, product]);
		} else {
			cart[productIndex].qty= cart[productIndex].qty + qty
			setCart(cart);
		}
		
	};

    return (
			<CardContainer>
				<div className="product-detail-container">
					<div className="product-detail-header">
						<Link to="/shop" className="btn btn-link">Volver atras</Link>
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
								<ItemCount stock={stock} qty={qty} setQty={setQty} />
							</div>
							<button onClick={() => addToCart(product, qty)} variant="primary">
								Agregar al carrito
							</button>
						</div>
					</div>
				</div>
			</CardContainer>
        
    )
}

export default ItemDetail;
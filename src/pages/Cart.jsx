import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Heading from '../components/styled/Heading.styeled';
import Container from '../components/styled/Container.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';
import { useCart } from '../context/CartContext';
import { Grid } from '@material-ui/core';
import  CartCounter from '../components/elements/CartCounter';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Button } from 'react-bootstrap';



const Cart = () => {
	const [cart, setCart]  = useCart();
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0);

	const isEmpty = cart.length===0
	const [ success, setSuccess ] = useState(false);
    const [orderId, setOrderId] = useState("");

	// {buyer: {name, phone, email}, products: { {id, title, price}, total}}
	const checkout = () => {
		if (isEmpty) {
			alert("No tienes productos en el carrito")
			return
		}
		const productsToBuy = cart.map (product => {
			return {
				id: product.id,
				title: product.title,
				price: product.price,
				qty: product.qty
			}
		})

		const buyer = {
			name: "Elina Rosato",
			phone: "1160126292",
			email: "rosatoelina@gmail.com"
		}

		// Cuando hago un addDoc, si la collection no existe, se crea automaticamente
		addDoc(collection(db, "orders"), {
			buyer: buyer,
			products: productsToBuy,
			total: totalPrice
		}).then(doc => {
			console.log("se creo el documento con el id",doc.id)
			setOrderId(doc.id);
			setSuccess(true);
		}).catch(error => {
			console.log(error)
		})
	}
	

	const EmptyCart = () => {
		return (
			<Container style={{backgroundColor: "white"}}>
				<p>Your cart is empty</p>
			</Container>		)
	};

	const FilledCart = () => {
		return (
			<>
				<Grid container >
					<Grid item xs={12} md={9}>
						<Container style={{backgroundColor: "white"}}>
							<Grid container spacing={2}>
								{cart.map(product => {
									return (
										<Grid item xs={12} key={product.id}>
											<Container>
												<Grid container spacing={1}>
													<Grid item xs={6} style={{backgroundColor: "orange"}}>
														<Grid container>
															<Grid item xs={12} md={6}>
																<img src={product.image} />
															</Grid>
															<Grid item xs={12} md={6}>
																<p>{product.title}</p>
															</Grid>
														</Grid>
													</Grid>
													<Grid item xs={3} style={{backgroundColor: "yellow"}}>
														<CartCounter id={product.id} stock={product.stock} originalQty={product.qty} />
													</Grid>
													<Grid item xs={3} style={{backgroundColor: "red"}}>
														<p>{product.price}</p>
													</Grid>
												</Grid>
											</Container>
										</Grid>
									);
								})}
							</Grid>
						</Container>
					</Grid>
					<Grid item xs={12} md={3}>
						<Container style={{backgroundColor: "red"}}>
							<p>Subtotal</p>
							<p>$ {totalPrice}</p>
							<button onClick={checkout}>Checkout</button>
						</Container>
					</Grid>
				</Grid>
				{success ? 
					<div style={{ 
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100v%",
						background: "rgb(76 175 80 / 90%)",
						textAlign: "center",
						color: "white",
						paddingTop: "25%"
					}}>
						<h1>Tu compra se ha realizado con exito</h1>
						<p>Puedes hacer seguimiento con el siguiente id {orderId}</p>
						<Button as={Link} to="/">Seguir comprando</Button>
					</div>
				:
					null
				}
			</>
		)
	};

	
    return (
    <Container>
				<BackgroundDiv />

				<Heading>
					Shopping Cart
				</Heading>

				{isEmpty ? <EmptyCart /> : <FilledCart />}
    
			</Container>
);
};

export default Cart;

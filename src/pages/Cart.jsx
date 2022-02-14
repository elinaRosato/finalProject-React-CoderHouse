import React from 'react';
import Heading from '../components/styled/Heading.styeled';
import Container from '../components/styled/Container.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';
import { useCart } from '../context/CartContext';
import { Grid } from '@material-ui/core';
import  CartCounter from '../components/elements/CartCounter';

const Cart = () => {
	const [cart, setCart]  = useCart();
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price*curr.qty, 0);

	const isEmpty = cart.length===0

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
							<button>Checkout</button>
						</Container>
					</Grid>
				</Grid>
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

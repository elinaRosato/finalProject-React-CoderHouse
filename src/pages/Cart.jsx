import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//Firebase
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

//Contexts
import { useCart } from '../context/CartContext';

//Components
import  CartCounter from '../components/elements/CartCounter';

//Styled Components
import { Heading, Subheading, SmallText, NormalText, ImportantText, Padding} from '../components/styled/Typography.styeled';
import Container from '../components/styled/Container.styled';
import ContainerFlex from '../components/styled/ContainerFlex.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';
import { Button, CartImage } from '../components/styled/Cart.styled';



const Cart = () => {
	const cart  = useCart()[0];
	const subtotalPrice = useCart()[3];
	const shippingCost = 15;
	const tax = subtotalPrice*0.21;
	const totalPrice = subtotalPrice + shippingCost + tax;

	const isEmpty = cart.length===0
	const [ success, setSuccess ] = useState(false);
  const [orderId, setOrderId] = useState("");

	const EmptyCart = () => {
		return (
			<Container style={{backgroundColor: "white"}}>
				<Subheading style={{padding: '2rem', textAlign: 'center'}}>Your cart is empty</Subheading>
				<NormalText style={{padding: '2rem', textAlign: 'center'}}>Looks like you haven't added anything to your cart yet</NormalText>
				<Link to="/" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center'}}>
					<Button style={{margin: '2rem', width: '40%'}}>Continue Shopping</Button>
				</Link>
			</Container>		
		)
	};

	const FilledCart = () => {
		return (
			<>
				<Grid container >
					<Grid item xs={12} md={9}>
						<Container style={{backgroundColor: "white", height: '100%'}}>
							<Subheading style={{padding: '2rem'}}>My Cart</Subheading>
							<Grid container spacing={2}>
								{cart.map(product => {
									return (
										<Grid item xs={12} key={product.id}>
											<Container>
												<Grid container spacing={1}>
													<Grid item xs={6} style={{alignSelf: 'center'}}>
														<Grid container>
															<Grid item xs={12} md={6}>
																<CartImage src={product.imagesURL[0]} style={{ alignSelf: 'center'}}/>
															</Grid>
															<Grid item xs={12} md={6} style={{ alignSelf: 'center'}}>
																<NormalText>{product.title}</NormalText>
															</Grid>
														</Grid>
													</Grid>
													<Grid item xs={3} style={{alignSelf: 'center'}}>
														<CartCounter id={product.id} stock={product.stock} originalQty={product.qty} />
													</Grid>
													<Grid item xs={3} style={{alignSelf: 'center'}}>
														<NormalText>{product.price.toFixed(2)}</NormalText>
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
						<Container style={{background: "linear-gradient(#CCFFBD, #7ECA9C)", height: '100%'}}>
							<Subheading>Order Summary</Subheading>
							<Padding />
							<SmallText>Items: {3}</SmallText>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<NormalText>Subtotal:</NormalText>
								<NormalText>€ {subtotalPrice.toFixed(2)}</NormalText>
							</ContainerFlex>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<NormalText>Shipping Cost:</NormalText>
								<NormalText>€ {shippingCost}</NormalText>
							</ContainerFlex>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<NormalText>Tax:</NormalText>
								<NormalText>€ {tax.toFixed(2)}</NormalText>
							</ContainerFlex>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<ImportantText>Total:</ImportantText>
								<ImportantText>€ {totalPrice.toFixed(2)}</ImportantText>
							</ContainerFlex>
							<Padding />
							<Link to="/checkout" style={{ textDecoration: 'none' }}>
								<Button>Checkout</Button>
							</Link>
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

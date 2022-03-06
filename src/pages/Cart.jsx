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
	const totalPrice = useCart()[3];
	console.log(totalPrice)


	const isEmpty = cart.length===0
	const [ success, setSuccess ] = useState(false);
  const [orderId, setOrderId] = useState("");

	// {buyer: {name, phone, email}, products: { {id, title, price}, total}}
	const checkout = () => {
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

				<Button>Continue shopping</Button>
				<p>Your cart is empty</p>
				<p>Looks like you haven't added anything to your cart yet</p>
				<p></p>
			</Container>		)
	};

	const FilledCart = () => {
		return (
			<>
				<Grid container >
					<Grid item xs={12} md={9}>
						<Container style={{backgroundColor: "white"}}>
							<Subheading>My Cart</Subheading>
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
														<NormalText>{product.price}</NormalText>
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
						<Container style={{backgroundColor: "red", height: '100%'}}>
							<Subheading>Order Summary</Subheading>
							<Padding />
							<SmallText>Items: {3}</SmallText>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<NormalText>Subtotal:</NormalText>
								<NormalText>{totalPrice}</NormalText>
							</ContainerFlex>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<NormalText>Shipping Cost:</NormalText>
								<NormalText>EUR 15</NormalText>
							</ContainerFlex>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<NormalText>Tax:</NormalText>
								<NormalText>{totalPrice*0.21}</NormalText>
							</ContainerFlex>
							<Padding />
							<ContainerFlex style={{justifyContent: 'space-between'}}>
								<ImportantText>Total:</ImportantText>
								<ImportantText>{totalPrice*1.21+15}</ImportantText>
							</ContainerFlex>
							<Padding />
							<Button onClick={checkout}>Checkout</Button>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Form } from 'react-bootstrap';


//Firebase
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

//Contexts
import { useCart } from '../../context/CartContext';

//Components

//Styled Components
import { Heading, ImportantText, NormalText, SmallText, Subheading } from '../styled/Typography.styeled';
import Container from '../styled/Container.styled';
import ContainerFlex from '../styled/ContainerFlex.styled';
import { Button, CheckoutForm, FormWrapper, Input, Label } from '../styled/Checkout.styled';
import BackgroundDiv from '../styled/BackgroundDiv.styled';


const Checkout = () => {

	const [ success, setSuccess ] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [cart, setCart] = useCart();
	const totalPrice = useCart()[3];
	
	const [firstStepMounted, setFirstStepMounted] = useState(true);
	const [secondStepMounted, setSecondStepMounted] = useState(false);

  const checkout = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const surname = e.target.elements.surname.value;
		const phone = e.target.elements.phone.value;
		const email = e.target.elements.email.value;
		const emailConf = e.target.elements.emailConf.value;

		const orderProducts = cart.map (product => {
			return {
				id: product.id,
				title: product.title,
				price: product.price,
				qty: product.qty
			}
		})

		const orderClient = {
			name: {name},
			surname: {surname},
			phone: {phone},
			email: {email}
		}

		addDoc(collection(db, "orders"), {
			client: orderClient,
			products: orderProducts,
			total: totalPrice
		}).then(doc => {
			setOrderId(doc.id);
			setSuccess(true);
		}).catch(error => {
			console.log(error)
		})

		//Clear Cart
		setCart([]);

		//Next Step
		setFirstStepMounted(false);
    setSecondStepMounted(true);
	}

  const FirstStep = () => {
			return (
				<Container style={{backgroundColor: "white"}}>
					<Subheading style={{margin:'2rem'}}>Order Form</Subheading>
					<FormWrapper>
						<Form onSubmit={checkout}>
							<Form.Group controlId="name">
								<ContainerFlex style={{justifyContent:'end'}}>
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Name" />
								</ContainerFlex>
							</Form.Group>
							<Form.Group controlId="surname">
								<ContainerFlex style={{justifyContent:'end'}}>
									<Form.Label>Surname</Form.Label>
									<Form.Control type="text" placeholder="Surname" />
								</ContainerFlex>
							</Form.Group>
							<Form.Group controlId="phone">
								<ContainerFlex style={{justifyContent:'end'}}>
									<Form.Label>Phone</Form.Label>
									<Form.Control type="text" placeholder="Phone" />
								</ContainerFlex>
							</Form.Group>
							<Form.Group controlId="email">
								<ContainerFlex style={{justifyContent:'end'}}>
									<Form.Label>Email</Form.Label>
									<Form.Control type="text" placeholder="Email" />
								</ContainerFlex>
							</Form.Group>
							<Form.Group controlId="emailConf">
								<ContainerFlex style={{justifyContent:'end'}}>
									<Form.Label>Email</Form.Label>
									<Form.Control type="text" placeholder="Email" />
								</ContainerFlex>
							</Form.Group>
							<Button type="submit" style={{margin: '2rem', width:'40%'}}>
								Continue
							</Button>
						</Form>
					</FormWrapper>
				</Container>		
			);
	};

	const SecondStep = () => {
		return (
			<>
				<Container style={{backgroundColor: "white"}}>
					<Subheading>Your order has been recieved</Subheading>
					<ImportantText>Thank you for your purchase!</ImportantText>
					<NormalText>Your order ID is: {orderId}</NormalText>
					<NormalText>You will recieve an order confirmation email with details of your order</NormalText>
					<Link to="/" style={{ textDecoration: 'none' }}>
							<Button onClick={checkout}>Back to Shop</Button>
					</Link>
				</Container>
			</>
		)
	};

	
	return (
		<Container>
			<BackgroundDiv />
			<Heading>
				Checkout
			</Heading>
			{ firstStepMounted ?  <FirstStep /> : null}
			{ secondStepMounted ?  <SecondStep /> : null}
		</Container>
	);
};

export default Checkout;

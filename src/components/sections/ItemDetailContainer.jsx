import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components';
import Heading from "../styled/Heading.styeled";
import Container from '../styled/Container.styled';
import BackgroundDiv from '../styled/BackgroundDiv.styled';
import { useProducts } from "../../context/ProductsContext";

const ItemDetailContainer = () => {
    //Setting the route
    const { id } = useParams();

    console.log(id)

    //Importing Products from Products Context
    const products = useProducts();

    console.log(products)

    //Getting the target product
    const product = products.filter(product => product.id === id);
    
    console.log(product)

    return (
      <Container>
				<BackgroundDiv />
				<div>
            <p>search bar, filters, sort</p>
        </div>
				<Heading>
					Product Detail
				</Heading>
        <div className="item-detail-container">
          {product ? <ItemDetail product={product} /> : null }
        </div>
			</Container>
        
    )
}

export default ItemDetailContainer;

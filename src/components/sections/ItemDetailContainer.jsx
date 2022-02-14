import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ItemDetail } from '../../components';
import Heading from "../styled/Heading.styeled";
import Container from '../styled/Container.styled';
import BackgroundDiv from '../styled/BackgroundDiv.styled';
import { useProductWithId } from "../../context/ProductsContext";

const ItemDetailContainer = () => {
    //Setting the route
    const { id } = useParams();
    const product = useProductWithId (id);

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

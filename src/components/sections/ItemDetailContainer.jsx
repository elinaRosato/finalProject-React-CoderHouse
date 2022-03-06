import React from 'react';
import { useParams } from "react-router-dom";

// Contexts
import { useProductWithId } from "../../context/ProductsContext";

// Components
import { ItemDetail } from '../../components';

// Styled Components
import { Heading } from "../styled/Typography.styeled";
import Container from '../styled/Container.styled';
import BackgroundDiv from '../styled/BackgroundDiv.styled';

const ItemDetailContainer = () => {
  //Setting the route
  const { id } = useParams();
  const product = useProductWithId (id);

  return (
    <Container>
      <BackgroundDiv />
      <Heading>
        Product Detail
      </Heading>
      <div className="item-detail-container">
        {product ? <ItemDetail product={product} /> : null }
      </div>
    </Container>
  )
};

export default ItemDetailContainer;

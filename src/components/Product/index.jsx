import React from "react";
import { useCard } from "../../Context/CardContext";
import { useCart } from "../../Context/CartContext";
import {
  Unlist,
  ListContainerCard,
  ContainerBreathe,
  Anchor,
  Img,
  DivName,
  Paragraph,
  H4,
  Span,
  DivPrices,
  DivButtons,
  AnchorButtons,
  Button,
} from "./styles";

export function Product() {
  const { card } = useCard();
  const {productInCart, setProductInCart} = useCart();
  
  function AddItemCart(idItem) {
    const ItemsInCart = JSON.parse(localStorage.getItem("IdItemCart")) || [];
    localStorage.setItem("IdItemCart", JSON.stringify([...ItemsInCart, idItem.target.value]));
  
    const cardFiltered = card.find((product) => product.id==idItem.target.value);
    
    setProductInCart([...productInCart, cardFiltered])
  }

  return (
    <React.Fragment>
      <Unlist>
        {card.map((product) => (
          <ListContainerCard key={product.id}>
            <ContainerBreathe>
              <Anchor to={`/details/${product.id}`}>
                <Img src={product.img} alt={product.name} />
              </Anchor>
              <DivName>
                <Paragraph>{product.category}</Paragraph>
                <H4>{product.name}</H4>
              </DivName>
              <DivPrices>
                <Paragraph>R$ {product.price}</Paragraph>
                <Span>{product.installments}</Span>
              </DivPrices>
              <DivButtons>
                <AnchorButtons to={`/details/${product.id}`}>
                  VER MAIS
                </AnchorButtons>
                <Button value={product.id} onClick={AddItemCart}>
                  ADICIONAR
                </Button>
              </DivButtons>
            </ContainerBreathe>
          </ListContainerCard>
        ))}
      </Unlist>
    </React.Fragment>
  );
}

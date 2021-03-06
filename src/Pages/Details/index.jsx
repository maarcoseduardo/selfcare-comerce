import React from "react";
import { useParams } from "react-router-dom";
import { useCard } from "../../Context/CardContext";
import { useCart } from "../../Context/CartContext";

import {
  DivContainer,
  Section,
  DivImg,
  Img,
  Article,
  H1,
  Div,
  SpanOld,
  Span,
  Paragraph,
  HR,
  DivButton,
  Button,
} from "./styles";

export function Details() {
  const { card } = useCard();
  const { productInCart, setProductInCart } = useCart();
  const { identificationPage } = useParams();

  function AddItemCart(idItem) {
    const copyCard = [...card] 
    const cardFiltered = copyCard.find((product) => product.id===idItem);

    if(cardFiltered){
      cardFiltered.inCart = true;
    }

    const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart")) || [];
    sessionStorage.setItem("IdItemCart", JSON.stringify([...ItemsInCart, cardFiltered]));
    
    setProductInCart([...productInCart, cardFiltered])
  }

  return (
    <DivContainer>
      {card.map((product) => {
        if (product.id === identificationPage) {
          return (
            <Section key={product.id}>
              <DivImg>
                <Img src={product.img} alt={product.name} />
              </DivImg>
              <Article>
                <H1>{product.name}</H1>
                <Div>
                  <SpanOld>De R${product.oldPrice} por</SpanOld>
                  <Span>R${product.price}</Span>
                  <Paragraph>{product.desc}</Paragraph>
                  <HR />
                </Div>
                <DivButton>
                  <Button onClick={() => AddItemCart(product.id)}>
                    Adicionar ao carrinho
                  </Button>
                </DivButton>
              </Article>
            </Section>
          );
        }
      })}
    </DivContainer>
  );
}

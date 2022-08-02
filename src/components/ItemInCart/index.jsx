import React, {useEffect} from "react";
import {
  H4,
  Img,
  DivGrid,
  SpanGrid,
  ButtonAddRemove,
  Container,
  Table,
  Thead,
  Tr,
  Th,
  ThProduto,
  DivProduto,
  Tbody,
  Td,
  TdGrid,
  TdProduto,
} from "./styles";

import { useCart } from '../../Context/CartContext';

export function ItemInCart() {
  const ItemsInCart = JSON.parse(sessionStorage.getItem("IdItemCart"))
  const {productInCart, setProductInCart} = useCart();
  

  function AddOneMoreItem(id){
    const tempProduct = [...ItemsInCart]
    const selectedProduct = ItemsInCart.find((product) => product.id===id)

    const index = tempProduct.indexOf(selectedProduct);

    const product = tempProduct[index];

    product.count = product.count + 1

    product.total = product.price * product.count

    sessionStorage.setItem("IdItemCart", JSON.stringify(tempProduct))
    
    setProductInCart([...productInCart, tempProduct])
  }

  function RemoveOneMoreItem(id){
    const tempProduct = [...ItemsInCart]
    const selectedProduct = ItemsInCart.find((product) => product.id===id)

    const index = tempProduct.indexOf(selectedProduct);

    const product = tempProduct[index];

    product.count = product.count - 1

    product.total = product.price * product.count

    sessionStorage.setItem("IdItemCart", JSON.stringify(tempProduct))
    
    setProductInCart([...productInCart, tempProduct])
  }

  return (
    <React.Fragment>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <ThProduto>Produto</ThProduto>
              <Th>Preço Unitário</Th>
              <Th>Quantidade</Th>
              <Th>Preço Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ItemsInCart?.map((product) => {
              return (
                <Tr key={product.id}>
                  <TdProduto>
                    <DivProduto>
                      <Img src={product.img} alt={product.name} />
                      <H4>{product.name}</H4>
                    </DivProduto>
                  </TdProduto>
                  <Td>{product.price}</Td>
                  <TdGrid>
                    <DivGrid>
                      <SpanGrid>
                        <ButtonAddRemove onClick={() => RemoveOneMoreItem(product.id)}>-</ButtonAddRemove>
                      </SpanGrid>
                      <SpanGrid>{product.count}</SpanGrid>
                      <SpanGrid>
                        <ButtonAddRemove onClick={() => AddOneMoreItem(product.id)}>+</ButtonAddRemove>
                      </SpanGrid>
                    </DivGrid>
                    <SpanGrid>
                      <ButtonAddRemove>remover</ButtonAddRemove>
                    </SpanGrid>
                  </TdGrid>
                  <Td>{product.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

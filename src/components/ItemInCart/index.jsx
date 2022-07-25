import React from "react";
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
import { useCart } from "../../Context/CartContext";

export function ItemInCart() {
  const {productInCart} = useCart();

  //criar a funcao de contador aqui.

  function AddOneMoreItem(id){
    const copyProduct = [...productInCart]

    const item = copyProduct.find((product) => product.id==id.target.value)

    console.log(item.count, {count: item.count + 1});
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
            {productInCart.map((product) => {
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
                        <ButtonAddRemove>-</ButtonAddRemove>
                      </SpanGrid>
                      <SpanGrid>{product.count}</SpanGrid>
                      <SpanGrid>
                        <ButtonAddRemove value={product.id} onClick={AddOneMoreItem}>+</ButtonAddRemove>
                      </SpanGrid>
                    </DivGrid>
                    <SpanGrid>
                      <ButtonAddRemove>remover</ButtonAddRemove>
                    </SpanGrid>
                  </TdGrid>
                  <Td>{product.total}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

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

export function ItemInCart() {

  const ItemsInCart = JSON.parse(localStorage.getItem("IdItemCart"))
  

  function AddOneMoreItem(id){

    //edit
    const item = ItemsInCart.find((product) => product.id==id)

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
                        <ButtonAddRemove>-</ButtonAddRemove>
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

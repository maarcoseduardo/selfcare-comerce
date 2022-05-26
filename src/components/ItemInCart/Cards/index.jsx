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

export function Cards({ img, name, price, priceTotal, count }) {
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
            <Tr>
              <TdProduto>
                <DivProduto>
                  <Img src={img} alt={name} />
                  <H4>{name}</H4>
                </DivProduto>
              </TdProduto>
              <Td>{price}</Td>
              <TdGrid>
                <DivGrid>
                  <SpanGrid>
                    <ButtonAddRemove>-</ButtonAddRemove>
                  </SpanGrid>
                  <SpanGrid>{count}</SpanGrid>
                  <SpanGrid>
                    <ButtonAddRemove>+</ButtonAddRemove>
                  </SpanGrid>
                </DivGrid>
                <SpanGrid>
                  <ButtonAddRemove>remover</ButtonAddRemove>
                </SpanGrid>
              </TdGrid>
              <Td>{priceTotal}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>

      {/* <Section>
        <Div>
          <Img src={img} alt={name} />
          <H3>{name}</H3>
        </Div>
        <DivPrice>R$ {price}</DivPrice>
        <DivAddRemove>
          <DivGrid>
            <SpanGrid>
              <ButtonAddRemove>-</ButtonAddRemove>
            </SpanGrid>
            <SpanGrid>{count}</SpanGrid>
            <SpanGrid>
              <ButtonAddRemove>+</ButtonAddRemove>
            </SpanGrid>
          </DivGrid>
          <SpanGrid>
            <ButtonAddRemove>remover</ButtonAddRemove>
          </SpanGrid>
        </DivAddRemove>
        <DivPrice>R$ {priceTotal}</DivPrice>
      </Section> */}
    </React.Fragment>
  );
}

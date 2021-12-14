import React from 'react';

import AnnmarieImg from './Annmarie.jpg'

import {
    Container,
    Table,
    Thead,
    TableRow,
    ThItem,
    Th,
    ThGrid,
    Tbody,
    Tr,
    Div,
    Td,
    H3,
    Img,
    TdItem,
    Span,
    DivGrid,
    SpanGrid,
    ButtonGrid,
    ContainerBuy,
    TableBuy,
    TbodyBuy,
    TdBuy,
    SpanBuy,
    SpanSend,
    Input,
    TrButton,
    TdBuyButton,
    Button,
    H3Buy
} from './styles';

export function Cart() {

    return (
        <Container>
            <Table>
                <Thead>
                    <TableRow>
                        <ThItem>Item</ThItem>
                        <Th>Preço</Th>
                        <ThGrid>Quantidade</ThGrid>
                        <Th>Total</Th>
                    </TableRow>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Div>
                                <Img src={AnnmarieImg}/>
                                <H3>Nome daaaaaaaaao Produto</H3>
                            </Div>
                        </Td>
                        <TdItem>
                            <Span>R$ 150,0</Span>
                        </TdItem>
                        <TdItem>
                            <DivGrid>
                                <SpanGrid>
                                    <ButtonGrid>-</ButtonGrid>
                                </SpanGrid>
                                <SpanGrid>0</SpanGrid>
                                <SpanGrid>
                                    <ButtonGrid>+</ButtonGrid>
                                </SpanGrid>
                            </DivGrid>
                            <SpanGrid>remover</SpanGrid>
                        </TdItem>
                        <TdItem>
                            <Span>R$ 1010,0</Span>
                        </TdItem>
                    </Tr>
                </Tbody>
            </Table>
            <ContainerBuy className="margins-respiro">
                <H3Buy>Resumo do Pedido</H3Buy>
                <TableBuy>
                    <TbodyBuy>
                        <Tr>
                            <TdBuy>
                                <SpanBuy>Subtotal:</SpanBuy>
                            </TdBuy>
                            <TdBuy>
                                <SpanBuy>VALOR</SpanBuy>
                            </TdBuy>
                        </Tr>
                        <Tr>
                            <TdBuy>
                                <SpanSend>Calcular Frete</SpanSend>
                            </TdBuy>
                            <TdBuy>
                                <Input type="number"/>
                            </TdBuy>
                        </Tr>
                        <Tr>
                            <TdBuy>
                                <SpanBuy>Frete:</SpanBuy>
                            </TdBuy>
                            <TdBuy>
                                <SpanBuy>Frete Gratis</SpanBuy>
                            </TdBuy>
                        </Tr>
                        <Tr>
                            <TdBuy>
                                <SpanBuy>Total:</SpanBuy>
                            </TdBuy>
                            <TdBuy>
                                <SpanBuy>Valor Total</SpanBuy>
                            </TdBuy>
                        </Tr>
                        <TrButton>
                            <Button>Finalizar Compra</Button>
                        </TrButton>
                    </TbodyBuy>
                </TableBuy>
            </ContainerBuy>
        </Container>
    );
}

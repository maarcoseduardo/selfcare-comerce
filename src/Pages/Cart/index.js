import React from 'react';

import { useCard } from '../../Context'
import AnnmarieImg from './Annmarie.jpg'

import {
    Container,
    Section,
    Tr,
    Div,
    H3,
    Img,
    Span,
    DivAddRemove,
    DivGrid,
    SpanGrid,
    ButtonAddRemove,
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
            <Section>
                <Div>
                    <Img src={AnnmarieImg}/>
                    <H3>Nome daaaaaaaaao Produto</H3>
                </Div>
                <Span>R$ 15000,0</Span>
                <DivAddRemove>
                    <DivGrid>
                        <SpanGrid>
                            <ButtonAddRemove>-</ButtonAddRemove>
                        </SpanGrid>
                        <SpanGrid>0</SpanGrid>
                        <SpanGrid>
                            <ButtonAddRemove>+</ButtonAddRemove>
                        </SpanGrid>
                    </DivGrid>
                    <SpanGrid>
                        <ButtonAddRemove>remover</ButtonAddRemove>
                    </SpanGrid>
                </DivAddRemove>
                <Span>R$ 1010,0</Span>
            </Section>
            <ContainerBuy>
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

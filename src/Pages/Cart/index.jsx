import React from 'react';
import { ItemInCart } from '../../components/ItemInCart';

import {
    Container,
    Tr,
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
            
            <ItemInCart />

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
                                <Input type="number" />
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

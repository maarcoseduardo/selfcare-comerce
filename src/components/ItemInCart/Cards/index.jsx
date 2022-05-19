import React from "react";
import {
    Section,
    Div,
    H3,
    Img,
    Span,
    DivAddRemove,
    DivGrid,
    SpanGrid,
    ButtonAddRemove
} from './styles'

export function Cards({img, name, price, priceTotal, count}) {

    return (
        <React.Fragment>
            <Section>
                <Div>
                    <Img src={img} alt={name} />
                    <H3>{name}</H3>
                </Div>
                <Span>R$ {price}</Span>
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
                <Span>R$ {priceTotal}</Span>
            </Section>
        </React.Fragment>
    )
}
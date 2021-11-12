import React from 'react';
import { useParams } from 'react-router-dom';
import { useCard } from '../../Context'

import {
    DivContainer, 
    Section,
    DivImg,
    Img,
    Article,
    H1,
    SpanOld,
    Span,
    Paragraph,
    HR,
    Button
} from './styles';

export function Details() {

    const {card} = useCard();
    const {identificationPage} = useParams();

    return (
        <DivContainer> 
        {card.map((product) => {
            if (product.id == identificationPage) {
                return <Section key={product.id}>
                            <DivImg>
                                <Img src={product.img} alt={product.name}/>
                            </DivImg>

                            <Article>
                                <H1>{product.name}</H1>
                                <SpanOld>De R${product.oldPrice} por</SpanOld>
                                    <Span>Por R${product.price}</Span>
                                <Paragraph>{product.desc}</Paragraph>
                                <HR/>
                                <Button src="">Adicionar ao carrinho</Button>
                            </Article>
                        </Section>
                }
            })
        } </DivContainer>
    )
}

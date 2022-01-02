import { useEffect } from 'react';
import {
    ListContainerCard,
    ContainerBreathe,
    Anchor,
    Img,
    DivName,
    Paragraph,
    H4,
    Span,
    DivPrices,
    AnchorButtons,
    Button
} from './styles';

export function Cards({ id, name, img, category, price, installments }) {

    function AddItemCart(idItem) {

        localStorage.setItem("IdItemCart", idItem.target.value)
    }

    return (
        <ListContainerCard>
            <ContainerBreathe >
                <Anchor to={`/details/${id}`}>
                    <Img src={img}
                        alt={name} />
                </Anchor>
                <DivName>
                    <Paragraph>{category}</Paragraph>
                    <H4>{name}</H4>
                </DivName>
                <DivPrices>
                    <Paragraph>R$ {price}</Paragraph>
                    <Span>{installments}</Span>
                </DivPrices>
                <AnchorButtons to={`/details/${id}`}>VER MAIS</AnchorButtons>
                <Button value={id} onClick={AddItemCart}>ADICIONAR</Button>
            </ContainerBreathe>
        </ListContainerCard>
    )
}
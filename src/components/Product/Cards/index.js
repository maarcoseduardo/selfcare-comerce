import { AddItemCart } from '../../../Context';
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
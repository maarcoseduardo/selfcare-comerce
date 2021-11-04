import {
    ListContainerCard,
    ContainerRespiro,
    Anchor,
    Img,
    DivName,
    Paragraph,
    H4,
    Span,
    DivPrices,
    AnchorButtons
} from './styles';

export function Cards({name, img, category, price}) {

    return (
        <ListContainerCard>
            <ContainerRespiro >
                <Anchor to="/details">
                    <Img src={img}
                         alt={name}/>
                </Anchor>
                <DivName>
                    <Paragraph>{category}</Paragraph>
                    <H4>{name}</H4>
                </DivName>
                <DivPrices>
                    <Paragraph>R$ {price}</Paragraph>
                    <Span>Parcelas</Span>
                </DivPrices>
                <AnchorButtons to="/details">VER MAIS</AnchorButtons>
                <AnchorButtons href="">ADICIONAR</AnchorButtons>
            </ContainerRespiro>
        </ListContainerCard>
    )
}

import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListContainerCard = styled.li`

    width: 350px;

    height: 430px;
    margin: 0 auto;

    &:hover{
        box-shadow: 1px 1px  10px var(--other-text-green);
    }    
`;

export const ContainerBreathe = styled.div`

    padding: 20px;
    text-align: center;
    width: 100%;
`;

export const Anchor = styled(Link)`
    width: auto;
`;

export const Img = styled.img`
    max-width: 100%;
    width: auto;

    height: 250px;
`;

export const DivName = styled.div`

`;

export const Paragraph = styled.p`

`;

export const H4 = styled.h4`

`;

export const Span = styled.span`

`;

export const DivPrices = styled.div`

`;

export const AnchorButtons = styled(Link)`
    display: block;

    width: 70%;
    margin: 0 auto;

    padding: 5px 0;
    background: var(--other-text-green);
    color: #FFF;
    border-radius: 3px;

    text-decoration: none;

    & + button{
        margin-top: 3px;
    }

`;
export const Button = styled.button`
     display: block;

    width: 70%;
    margin: 0 auto;

    padding: 5px 0;
    background: #000;
    color: #FFF;
    border-radius: 3px;

    cursor: pointer;

`;
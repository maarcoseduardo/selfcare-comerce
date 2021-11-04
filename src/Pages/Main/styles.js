import styled from "styled-components";


export const DivContainerPromo = styled.div`
 border-bottom: 1px solid var(--line-division);

`;

export const DivPromo = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 15px 70px;
 align-items: center;
`;

export const H2 = styled.h2`

`;

export const Span = styled.span`

`;

export const ContainerMain = styled.section`

 width: 100%;
 max-height: 1400px;

 padding: 15px 70px;

 @media screen and (min-width: 512px) and (max-width: 1190px) {
    max-height: 2200px;
 }

 @media only screen and (min-width: 490px) and (max-width: 835px){
     max-height: 3950px;
 }
`;

export const ContainerProducts = styled.div`

`;
import styled from "styled-components";


export const Container = styled.section`
    height: 450px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 30px 70px;

    @media screen and (min-width: 400px) and (max-width: 1130px) {
        display: block;
        height: 750px;
    }
`;

export const H2 = styled.h2`
    margin-bottom: 10px;

    font-size: 2rem;
`;

export const Tr = styled.tr`
    width: 100%;
`;
export const Td = styled.td`

`;

export const TdItem = styled.td`
    width: 100px;
    text-align: center;

    @media screen and (min-width: 1450px) and (max-width: 1550px) {
        width: 155px;
    }
    @media screen and (min-width: 1300px) and (max-width: 1450px) {
        width: 120px;
    }
    @media screen and (min-width: 1172px) and (max-width: 1300px) {
        width: 95px;
    }
    @media screen and (min-width: 1130px) and (max-width: 1172px) {
        width: 95px;
    }
    @media screen and (min-width: 1050px) and (max-width: 1130px) {
        width: 95px;
    }
    @media screen and (min-width: 875px) and (max-width: 1050px) {
        width: 100px; //DIMINUIR TAMANHO DO TH PARA AJUSTAR COM RESPONSIVIDADE
    }
    @media screen and (min-width: 800px) and (max-width: 875px) {
        width: 70px;
    }
    @media screen and (min-width: 400px) and (max-width: 800px) {
        width: 60px;
    }
`;

export const ContainerBuy = styled.div`
    padding: 15px;
    
    box-shadow: 1px 1px 10px var(--other-text-green);
`;

export const H3Buy = styled.h3`

    padding-bottom: 10px;

    border-bottom: 1px solid var(--line-division);
`;

export const TableBuy = styled.table`

    width: 100%;
    height:300px;
    border-collapse: collapse;
`;

export const TbodyBuy = styled.tbody`

`;

export const TdBuy = styled.td`
    text-align: center;

    padding: 10px;
    border-bottom: 1px solid var(--line-division);
`;
export const SpanSend = styled.span`

`;

export const SpanBuy = styled.span`
   font-weight: bold;
`;

export const Input = styled.input`
    width: 90px;
    height: 30px;

    margin: 0 10px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 5px 20px;

    background: var(--other-text-green);

    font-size: 1rem;
    font-weight: bold;
`;

export const TrButton = styled.tr`
    width: 100%;
    padding: 10px 0;
`;

export const TdBuyButton = styled.td`
    width: 100%;
`;
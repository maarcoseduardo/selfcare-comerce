import styled from "styled-components";

export const Container = styled.section`
    height: 450px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 30px 70px;

    @media screen and (min-width: 400px) and (max-width: 1050px) {
        display: block;
        height: 600px;
    }
`;


export const Table = styled.table`
    width: 690px;
    height: 115px;
    /* background: green; */
    border-collapse: collapse;

    @media screen and (min-width: 1450px) and (max-width: 1555px) {
        width: 950px;
    }
    @media screen and (min-width: 1300px) and (max-width: 1450px) {
        width: 800px;
    }
    @media screen and (min-width: 1172px) and (max-width: 1300px) {
        width: 600px;
    }
    @media screen and (min-width: 1050px) and (max-width: 1172px) {
        width: 550px;
    }
    @media screen and (min-width: 400px) and (max-width: 1050px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;

export const Thead = styled.thead`
    
    width: 100%;
    height: 25px;
`;

export const TableRow = styled.tr`

    display: flex;

    width: 100%;
    height: 25px;

    align-items: center;
    /* background-color: yellow; */
    border-bottom: 1px solid var(--line-division);
`;

export const ThItem = styled.th`
    width: 280px;

    @media screen and (min-width: 1450px) and (max-width: 1550px) {
        width: 450px;
    }
    @media screen and (min-width: 1300px) and (max-width: 1450px) {
        width: 370px;
    }
    @media screen and (min-width: 1172px) and (max-width: 1300px) {
        width: 280px;
    }
    @media screen and (min-width: 1050px) and (max-width: 1172px) {
        width: 250px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1050px) {
        width: 450px;  
    }
    @media screen and (min-width: 950px) and (max-width: 1000px) {
        width: 400px;  
    }
    @media screen and (min-width: 900px) and (max-width: 950px) {
        width: 350px;  
    }
    @media screen and (min-width: 850px) and (max-width: 900px) {
        width: 320px;  
    }
`;

export const ThGrid = styled.th`
    width: 190px;

    @media screen and (min-width: 1050px) and (max-width: 1172px) {
        width: 190px;
    }
    @media screen and (min-width: 400px) and (max-width: 1050px) {
        width: 190px;
    }
`;

export const Th = styled.th`
    width: 85px;

    @media screen and (min-width: 1450px) and (max-width: 1550px) {
        width: 155px;
    }
    @media screen and (min-width: 1300px) and (max-width: 1450px) {
        width: 120px;
    }
    @media screen and (min-width: 1172px) and (max-width: 1300px) {
        width: 95px;
    }
    @media screen and (min-width: 1050px) and (max-width: 1172px) {
        width: 60px;
    }
    @media screen and (min-width: 875px) and (max-width: 1050px) {
        width: 100px; //DIMINUIR TAMANHO DO TH PARA AJUSTAR COM RESPONSIVIDADE
    }
    @media screen and (min-width: 820px) and (max-width: 875px) {
        width: 70px;
    }
    @media screen and (min-width: 400px) and (max-width: 820px) {
        width: 60px;
    }
`;


export const Tbody = styled.tbody`
    display: block;
    
    width: 100%;
    height: 115px;
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
    @media screen and (min-width: 1050px) and (max-width: 1172px) {
        width: 60px;
    }
    @media screen and (min-width: 875px) and (max-width: 1050px) {
        width: 100px; //DIMINUIR TAMANHO DO TH PARA AJUSTAR COM RESPONSIVIDADE
    }
    @media screen and (min-width: 820px) and (max-width: 875px) {
        width: 70px;
    }
    @media screen and (min-width: 400px) and (max-width: 820px) {
        width: 60px;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 280px; 
    padding: 10px;

    align-items: center;

    @media screen and (min-width: 1450px) and (max-width: 1550px) {
        width: 450px;
    }
    @media screen and (min-width: 1300px) and (max-width: 1450px) {
        width: 370px;
    }
    @media screen and (min-width: 1172px) and (max-width: 1300px) {
        width: 280px;
    }
    @media screen and (min-width: 1050px) and (max-width: 1172px) {
        width: 250px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1050px) {
        width: 450px;  
    }
    @media screen and (min-width: 950px) and (max-width: 1000px) {
        width: 400px;  
    }
    @media screen and (min-width: 900px) and (max-width: 950px) {
        width: 350px;  
    }
    @media screen and (min-width: 850px) and (max-width: 900px) {
        width: 320px;  
    }
`;

export const H3 = styled.h3`
    max-width:300px;
`;

export const Img = styled.img`
    width: 75px;
    height: 75px;
`;

export const Span = styled.span`
    padding: 5px;
`;

export const DivGrid = styled.div`
    display: grid;
    grid-template-columns: 40px 40px 40px;
    margin: 0 35px;
    text-align: center;
`;

export const SpanGrid = styled.span`

`;

// Custom Buy Menu
export const ButtonGrid = styled.button`
    width: 100%;
    background-color: none;
    color: green;

    font-size:16px;
    
    font-weight: bold;

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
import styled from "styled-components";

export const Container = styled.div`
  max-width: 730px;
  width: 100%;

  @media screen and (min-width: 1080px) and (max-width: 1250px) {
    max-width: 600px;
  }
  @media screen and (min-width: 550px) and (max-width: 1080px) {
    max-width: 1080px;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
`;

export const ThProduto = styled.th`
  width: 300px;
`;

export const DivProduto = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    width: 100%; 
    align-items: center;
`;

export const Tbody = styled.tbody`
`;

export const Td = styled.td`
text-align: center;
padding: 5px 0;
`;

export const TdProduto = styled.td`
`;

// export const Section = styled.section`
//     display: flex;
//     justify-content: space-between;
//     max-width: 730px;
//     width: 100%;
//     height: 90px;
//     align-items: center;

//     @media screen and (min-width: 1080px) and (max-width: 1250px) {
//         transition: 0.4s;
//         max-width: 600px;
//     }
//     @media screen and (min-width: 550px) and (max-width: 1080px) {
//         width: 100%;
//         max-width: 1080px;
//     }
//     @media screen and (min-width: 200px) and (max-width: 580px) {
//         flex-direction: column;
//         height: 250px;
//     }
// `;

// export const Div = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 280px; 
//     padding: 10px;
//     align-items: center;

//     @media screen and (min-width: 580px) and (max-width: 1080px) {
//         width: 340px;
//     }
//     @media screen and (min-width: 200px) and (max-width: 580px) {
//         display: block;
//         transition: none;
//         width: 100%;
//     }
// `;

export const H3 = styled.h3`
    max-width:300px;
`;

export const Img = styled.img`
    width: 75px;
    height: 75px;
`;

// export const DivPrice = styled.div`
//     padding: 5px;
// `;

export const DivGrid = styled.div`
    display: grid;
    max-width: 130px;
    width: 100%;
    height: 30px;
    margin: 0 auto;
    /* margin-bottom: 5px; */
    grid-template-columns: 40px 40px 40px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
`;

export const SpanGrid = styled.span`
`;

// // Custom Buy Menu
export const ButtonAddRemove = styled.button`
    max-width: 65px;
    width: 100%;
    background: none;
    border: none;
    color: green;
    font-size:16px;
    font-weight: bold;
    cursor: pointer;
`;
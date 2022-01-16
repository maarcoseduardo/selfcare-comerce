import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    width: 65%;
    height: 90px;

    align-items: center;

    @media screen and (min-width: 800px) and (max-width: 1130px) {
        width: 100%;
        margin-bottom: 30px;
    }
    @media screen and (min-width: 400px) and (max-width: 800px) {
        display: block;
        width: 100%;
        height: 280px;
        margin-bottom:;
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
    @media screen and (min-width: 1130px) and (max-width: 1172px) {
        width: 250px;
    }
    @media screen and (min-width: 1050px) and (max-width: 1130px) {
        width: 490px;
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
    @media screen and (min-width: 800px) and (max-width: 900px) {
        width: 320px;  
    }
    @media screen and (min-width: 400px) and (max-width: 800px) {
        width: 100%;
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
    @media screen and (min-width: 300px) and (max-width: 800px) {
        display:block;
        text-align: center;
    }
`;

export const DivAddRemove = styled.div`

    @media screen and (min-width: 300px) and (max-width: 800px) {
        width: 120px;
        margin: 20px auto;
    }
`;

export const DivGrid = styled.div`
    display: grid;
    height: 30px;
    margin-bottom: 5px;
    grid-template-columns: 40px 40px 40px;
    text-align: center;
    align-items: center;


    border: 1px solid black;
    border-radius: 10px;
`;

export const SpanGrid = styled.span`
`;

// Custom Buy Menu
export const ButtonAddRemove = styled.button`
    width: 100%;
    
    background: none;
    border: none;
    color: green;
    
    font-size:16px;
    font-weight: bold;
    cursor: pointer;

`;
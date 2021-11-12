import styled from "styled-components";

export const DivContainer = styled.div`

    height: 580px;
    width: 100%;
    padding: 25px 40px;  //editar respiro dos outros componentes

    /* max-height: 1000px; */
`;

// export const Header = styled.header` //HEADER DE NAVEGAÇÃO ENTRE PAGINAS
//     width: 100%;
//     height: 50px;

// `;

export const Section = styled.section`

    width: 100%;
    height: 495px;
    display: flex;
    justify-content: space-between;
`;

export const DivImg = styled.div`

    width: 400px;
    margin: 30px 70px;
    
`;

export const Img = styled.img`

    width: 350px;
    max-width: 100%;
    padding: 20px;

    border: 1px solid var(--other-text-green);

`;

export const Article = styled.article`

    width: 750px;
    max-width: 60%;
    padding: 20px;
    
`;

export const H1 = styled.h1`

    font-size: 3rem;
    margin-bottom: 30px;
`;

export const SpanOld = styled.span`
    display: block;
    margin-bottom: 15px;
    
`;

export const Span = styled.span`
    display: block;

    margin-bottom: 15px;

    font-size: 1.5em;
    font-weight: bold;

`;

export const HR = styled.hr`

    margin: 30px 0;

`;

export const Paragraph = styled.p`

    font-size: 1rem;
    margin-bottom: 15px;

`;

export const Button = styled.button`

    width: 100%;

    padding: 5px 20px;
    
    background: var(--other-text-green);
  
    font-size: 1.5rem;
    font-weight: bold;
`;
import styled from "styled-components";

export const FooterContainer = styled.footer`
    
    height: 240px;
    max-width: 100%;
    min-width: 480px;
    position: relative;
    bottom: 0;
    background: var(--background-footer);

    @media only screen and (min-width: 480px) and (max-width: 835px){
     height: 250px;
 }
`;
 
 export const AreaFooter = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 65px 20px 75px;

    @media only screen and (min-width: 340px) and (max-width: 835px){
    
      display: block;
      text-align: center;
      width: 100%;
   }
 `;

 export const UnList = styled.ul`
 `;

 export const List = styled.li`
   
    font-weight: bold;

    &{
        margin-top: 10px;
    }
 `;

 export const Div = styled.div`
    
    width: 400px;
    @media only screen and (min-width: 340px) and (max-width: 835px){
    width: 100%;
    padding: 0 60px;
   
   }
 `;

 export const Paragraph = styled.p`

    font-weight: bold;
    margin-bottom: 25px;
  
 `;

 export const Input = styled.input`
 
    width: 70%;
    height: 40px;

    padding: 0 0 0 10px;

    border: 1px solid var(--line-division);
    border-radius: 5px 0 0 5px;
 `;

 export const Button = styled.button`
    width: 30%;
    height: 40px;

    color: white;
    font-weight: bold;

    background: var(--other-text-green);

    border-radius: 0 5px 5px 0;
 `;

 export const AreaSocial = styled.div`
 
    height: 12vh;
    width: 100%;
    
    background: var(--background-footer);
    
    display: flex;
    justify-content: space-between;
    padding: 20px 65px 0 75px;

    border-top: 1px solid var(--line-division);
 `;

 export const Nav = styled.nav`
    
 `;

 export const UnListSocial = styled.ul`
    
    display: flex;
    justify-content: space-between;
    width: 60px;
 `;

 export const ListSocial = styled.li`

    filter: invert(49%) 
    sepia(59%) 
    saturate(568%) 
    hue-rotate(50deg) 
    brightness(102%) 
    contrast(91%);
 
 `;

 export const ImgSocial = styled.img`
 
  height: 24px;
  width: 24px;
 `;


 export const NavPayment = styled.nav`
    
    width: 150px;
 `;

 export const UnListPayment = styled.ul`
  
    display: flex;
    justify-content: space-between;
    
 `;

 export const ListPayment = styled.li`
 
 `;

 export const ImgPayment = styled.img`
    
  height: 40px;
  width: 40px;
 
 `;
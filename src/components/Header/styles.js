import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.header`

    height: 50px;
    width: 100%;

    background: var(--background-page);
    position: fixed;
`;

export const HeaderTop = styled.div`

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 70px;
`;

export const DivLogo = styled.div`
    
    width: 85px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:hover{
        filter: invert(49%) 
        sepia(59%) 
        saturate(568%) 
        hue-rotate(50deg) 
        brightness(102%) 
        contrast(91%);
    }
`;

export const Nav = styled.nav`

`;

export const ImgLogo = styled.img`
    margin-top: 2px;
`;

export const SpanLogo = styled.span`

`;

export const UnList = styled.ul`

    width: 120px;
    
    display: flex;
    justify-content: space-between;
`;

export const List = styled.li`

filter: invert(49%) 
sepia(59%) 
saturate(568%) 
hue-rotate(50deg) 
brightness(102%) 
contrast(91%);
`;

export const Anchor = styled(Link)`
    text-decoration: none;
`;

export const ImgList = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 5px;
`;
import styled from "styled-components";

export const Unlist = styled.ul`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    @media only screen and (min-width: 770px) and (max-width: 1185px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
      }

      @media only screen and (min-width: 490px) and (max-width: 835px){
           display: block;
      }
`;


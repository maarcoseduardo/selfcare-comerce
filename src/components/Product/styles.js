import styled from "styled-components";

export const Unlist = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (min-width: 830px) and (max-width: 1185px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 200px) and (max-width: 830px){
    display: block;
  }
`;


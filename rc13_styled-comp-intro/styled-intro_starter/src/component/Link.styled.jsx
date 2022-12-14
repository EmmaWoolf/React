import styled, { css } from 'styled-components';

const StyledLink = styled.a`
 font-size: 5rem;
 text-decoration: none;
 :hover {
    opacity: 0.5;
 }
 ${(props)=> props.secondary && css`
  background-color: lightblue;
  color: crimson;
  `
  }
`;

export default StyledLink;

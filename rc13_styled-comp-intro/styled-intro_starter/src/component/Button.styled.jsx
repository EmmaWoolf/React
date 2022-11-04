import styled from "styled-components";

export const Button = styled.button`
/* background-color: hotpink; */
background-color: ${(props)=> (props.primary ? "white" : "purple")};
/* color: grey; */
cursor: pointer;
padding: 1rem;
border-radius: 0.5rem;
/* margin: 0.5rem; */
width: 8rem;
/* border-color: pink; */
/* color: ${(props)=> (props.primary ? "purple" : "white")}; */
color: ${({primary})=> (primary ? "purple" : "white")};
font-weight: 800;
&:hover{
    transform: scale(0.80);
}
`;
export const TomatoButton = styled(Button)`
background-color: ${(props)=> (props.primary ? "white" : "tomato")};
color: ${({primary})=> (primary ? "tomato" : "white")};
border: ${({primary})=> primary ? "2px solid yellow" : "green"};
`
;
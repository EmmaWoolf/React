import { Button, TomatoButton } from "./component/Button.styled"
import Container from "./component/Container";
import HeaderText from "./component/HeaderText.styled";
import StyledLink from "./component/Link.styled";

const App = () => {
  return (
    <>
    <Container bg="grey">
      <HeaderText color="hotpink">StyledComponent</HeaderText>
      <Button>Save</Button>
      <Button primary>Clear</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>  
  </Container>
  <Container bg="#999">
    <StyledLink href="https://clarusway.com" target= "_blank" >Clarusway</StyledLink>
    <StyledLink secondary href="https://react.org" target= "_blank" >React</StyledLink>
  </Container>
  </>

  );
};

export default App;

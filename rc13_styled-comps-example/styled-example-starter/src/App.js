import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/GlobalStyled";

const theme={
  colors:{
    header: "#FFF",
    body: "#eee",
    footer: "#8a1c4a",
  },
    margins: {},
    responsive: "768px",
};



const App = () => {
  return (
    <ThemeProvider theme= {theme}>
      <GlobalStyles/>
      <Header />
    </ThemeProvider>
  );
};

export default App;

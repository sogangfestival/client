import Router from "./Router";
import AppContainer from "./components/templates/AppContainer";
import GlobalStyle from "./styles/GlobalStyle";
import "@/styles/font.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

export default App;

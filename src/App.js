import RouterComponent from "Router";
import AppContainer from "@components/templates/AppContainer";
import GlobalStyle from "@styles/GlobalStyle";
import "@styles/font.css";
import Header from "@components/organisms/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <RouterComponent />
      </AppContainer>
    </>
  );
}

export default App;

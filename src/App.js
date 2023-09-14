import RouterComponent from "Router";
import AppContainer from "@components/templates/AppContainer";
import GlobalStyle from "@styles/GlobalStyle";
import "@styles/font.css";
import MetaTag from "SEO";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <MetaTag />
        <RouterComponent />
      </AppContainer>
    </>
  );
}

export default App;

import RouterComponent from "Router";
import AppContainer from "@components/templates/AppContainer";
import GlobalStyle from "@styles/GlobalStyle";
import "@styles/font.css";
import MetaTag from "SEO";
import { config } from "@utils/SEOConfig";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <MetaTag {...config} />
        <RouterComponent />
      </AppContainer>
    </>
  );
}

export default App;

import RouterComponent from "Router";
import AppContainer from "@components/templates/AppContainer";
import GlobalStyle from "@styles/GlobalStyle";
import "@styles/font.css";
import MetaTag from "SEO";
import theme from "@styles/theme";
import { ThemeProvider } from "@components/templates/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <MetaTag />
        <AppContainer>
          <RouterComponent />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;

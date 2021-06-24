import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => (
  <ThemeProvider forcedTheme={Component.theme || undefined}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;

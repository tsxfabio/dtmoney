import { ThemeProvider } from "styled-components";
import { DashboardBox } from "./components/DashboardBox";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Home />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

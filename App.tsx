import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

import Routes from "./src/routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

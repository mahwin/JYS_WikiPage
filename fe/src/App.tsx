import { useEffect } from "react";
import axios from "axios";
import { theme } from "./style/theme";
import { ThemeProvider } from "styled-components";
import { Button, Text, HStack, VStack } from "./components/Common";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;

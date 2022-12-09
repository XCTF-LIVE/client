import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HighlightedRaces from "./components/HighlightedRaces";
import DayRaces from "./components/DayRaces";
import WIP from "./components/WIP";
import Form from "./components/Form";
import Submimtted from "./components/Submitted";

// theme
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      // default background color
      "html, body": {
        background: "#1D2337",
      },
    }),
  },
  // figma colors
  colors: {
    primary: {
      400: "#C98474",
      800: "#6C5049",
    },
    secondary: {
      200: "#BC91B4",
      300: "#4C6F78",
      400: "#182D4D",
      500: "#2A3148",
      600: "#1D2337",
      700: "#151926",
      800: "#0B1123",
      900: "#050D21",
    },
    grays: {
      100: "#FFFFFF",
      300: "#BE8EA7",
      700: "#666666",
      900: "#000000",
    },
  },
});

interface AppInput {
  raceJSON: String;
}

function App({ raceJSON }: AppInput) {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <WIP />
        <Navbar />
        <Form />
        <Submimtted />
        <HighlightedRaces />
        <DayRaces title={"Today"} />
        <DayRaces title={"Yesterday (11/23/22)"} />
      </Router>
    </ChakraProvider>
  );
}

export default App;

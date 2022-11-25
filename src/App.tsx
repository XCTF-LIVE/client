import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HighlightedRaces from "./components/HighlightedRaces";
import DayRaces from "./components/DayRaces";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <HighlightedRaces />
        {DayRaces("Today")}
        {DayRaces("Yesterday (11/23/22)")}
      </Router>
    </ChakraProvider>
  );
}

export default App;

import "./App.css";
import { Box, Center, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Ratings from "./pages/Ratings";

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

function App() {
  const [page, setPage] = useState("");

  const handleHashChange = () => {
    const currentPage = window.location.hash.substring(1);
    setPage(currentPage);
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Center>
          <Box w={"100%"} maxW={"1000px"}>
            {page === "" && <Home />}
            {page === "ratings" && <Ratings />}
            {page === "submit" && <Ratings />}
          </Box>
        </Center>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;

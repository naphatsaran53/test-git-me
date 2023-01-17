import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BookList from "./components/BookList.jsx";
import Favorites from "./components/Favorites.jsx";
import BookDetails from "./components/BookDetails.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;

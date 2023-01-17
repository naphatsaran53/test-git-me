import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import axios from "axios";
import "../App";
import { Box, Image, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { useAppContext } from "./context/appContext";
const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box p="10px">
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="15px">
        {books.map((book) => (
          <Box key={book.id}>
            <Text>{book.title}</Text>
            <Image src={book.image_url} alt="#" />
            <Button
              bg="#AF85B2"
              color="#FFFF"
              mt="10px"
              onClick={() => addToFavorites(book)}
            >
              Add to Favorites
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BookList;

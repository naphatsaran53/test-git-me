import React from 'react'
import {Box, Flex, Heading, Spacer, Text} from '@chakra-ui/react'

function Navbar() {
  return (
    <Box >
        <Flex p="20px" bg="#232323" color="#FFFF">
        <Heading>React Books App</Heading>
        <Spacer/>
        <Text mt="10px">Your Favorites</Text>
        </Flex>
        
    </Box>
  )
}

export default Navbar
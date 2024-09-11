import { Box, Button, Circle, Flex, Image, Stack, Text,Input } from '@chakra-ui/react';
import React from 'react'
import { useColorMode} from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/media-query';
import { useDisclosure } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
  

function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const {isNotSmallerScreen} = useMediaQuery("min-width:600px")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">            
        </Flex>
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
                Hello, I am 
            </Text>
            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
                Tankiso Fuma
            </Text>
            <Text color={isDark ? "gray.200" : "gray.500"}>
                Frontend Developer, NextJS Enthusiast & Nerd.
            </Text>
            {/* Hire Me Modal */}
           <div>
           <Button onClick={onOpen} color={isDark ? "gray.200" : "gray.500"}>Contact Me</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Contact Me</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel>Full names</FormLabel>
                    <Input ref={initialRef} placeholder='Full names' />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email' />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Reason</FormLabel>
                    <Textarea placeholder='Reason For Reaching Out' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button colorScheme='blue' ml={3}>
                    Send
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
           </div>
        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize="300px" src='/me.jpg'/>
    </Stack>
  )
}

export default Navbar
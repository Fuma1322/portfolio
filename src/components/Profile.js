import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/react'; // Added Icon import from Chakra UI

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
      <Box>
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          11+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Months Of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontSize="2xl" fontWeight="bold">
          Fullstack Developer, with a keen interest in Frontend Development
        </Text>
        {/* <Flex direction={isNotSmallerScreen ? "row" : "column"} mt="8">
          <Flex rounded="xl" direction="column" mt="4" bg="white" h="30vh" w="30vh" justify="flex-end" _hover={{bg:"teal.600"}}>
            <Icon color="black" p="2" as={FaGlobe} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Web Apps
            </Text>
          </Flex>
        </Flex> */}
      </Box>
    </Flex>
  );
}

export default Profile;

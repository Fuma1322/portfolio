import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton, useColorMode, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Profile from "./components/Profile";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="1" gap="10" size="md" fontWeight="semibold" color="cyan.400">
          fuma
        </Heading>
        <Spacer />
        <Link to="/about">
          <Button mr="4" colorScheme="teal" variant="outline" _hover={{ bg: "teal.400", color: "white" }}>
            About
          </Button>
        </Link>
        <Link to="/project">
          <Button mr="4" colorScheme="cyan" variant="outline" _hover={{ bg: "teal.400", color: "white" }}>
            Projects
          </Button>
        </Link>
        
        <IconButton
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Navbar />
      <Socials />
      <Profile />
    </VStack>
  );
}

export default App;

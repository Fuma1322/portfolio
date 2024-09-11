import {VStack, Flex, Heading, Spacer} from "@chakra-ui/layout"
import { IconButton, useColorMode} from "@chakra-ui/react";
import {FaMoon, FaSun } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Profile from "./components/Profile";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="1" gap="10" size="md" fontWeight="semibold" color="cyan.400">
          fuma
        </Heading>
        <Spacer/>
      <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode}></IconButton>
      </Flex>
      <Navbar/>
      <Socials/>
      <Profile/>
    </VStack>
  );
}

export default App;

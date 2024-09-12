import React from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Link to="/">
            <Heading size="md" p="4" fontWeight="semibold" color="cyan.400">
            fuma
            </Heading>
        </Link>

        <IconButton
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </Flex>
  );
}

export default Header;
 
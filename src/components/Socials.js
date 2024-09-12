import { HStack, Icon, Link,Text, } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Socials() {
  return (
      <>
      <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            style={{ color: "blue.800" }}
          >
            Below Are My Social Media Links</Text>
    <HStack spacing={{ base: "12", md: "24" }} mb="8">
      <Link href="https://www.facebook.com/profile.php?id=100008058046488" isExternal>
        <Icon as={FaFacebookF} boxSize="50" />
      </Link>
      <Link href="https://www.instagram.com/tequila.stash" isExternal>
        <Icon as={FaInstagram} boxSize="50" />
      </Link>
      <Link href="https://github.com/Fuma1322" isExternal>
        <Icon as={FaGithub} boxSize="50" />
      </Link>
      <Link href="https://www.linkedin.com/in/tankiso-leonard-fuma-2b16352a5" isExternal>
        <Icon as={FaLinkedin} boxSize="50" />
      </Link>
    </HStack>
      </>
  );
}

export default Socials;

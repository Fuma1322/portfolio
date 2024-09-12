import {
  Flex,
  Heading,
  Text,
  ListItem,
  Image,
  List,
  Link,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      py="10"
      wrap="wrap"
      direction="column"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap="10"
        borderBottom="2px"
        borderColor="purple.800"
        shadow="lg"
        mt="10"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex mx="10" direction="column">
          <Heading
            as="h2"
            fontWeight="medium"
            fontSize={{ lg: "5xl", base: "3xl" }}
            paddingBottom="20px"
            paddingLeft="90px"
          >
            About
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              Me
            </span>
          </Heading>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
          >
            Hello Everyone, I am{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Tankiso Fuma{" "}
            </span>
            <br />
            from
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Maseru, Lesotho.
            </span>
          </Text>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
          >
            I completed my <br />
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Foundations Of Computer Science
            </span>{" "}
            <br />
            at
            <Link
              href="https://holberton.co.ls/"
              _hover={{
                textDecor: "none",
                color: "blue.900",
              }}
            >
              <span
                style={{
                  fontWeight: "semi-bold",
                  marginLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {" "}
                Holberton School Lesotho,
              </span>
              <br />
            </Link>
            in 2024
          </Text>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
          >
            My time at Holberton School <br/> allowed me to develop a strong<br/> foundation in{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Linux, data structures, <br/> algorithms, low-level programming,<br/>
              high-level modern languages, databases,<br/> APIs, and DevOps.
            </span>
            <br />
            I also have hands-on experience working <br/>with{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              Next.js and TypeScript
            </span>{" "}
            through various projects.
          </Text>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="bold"
            mt="3"
            mb="2"
          >
            Apart from coding, here are some other activities that I love to do!
          </Text>
          <List>
            <ListItem
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Playing Cricket
            </ListItem>
            <ListItem
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Video Games
            </ListItem>
          </List>
        </Flex>
        <Image mx="10" src="me.jpg" w="360px" h="300px" />
      </Flex>
    </Flex>
  );
};

export default About;

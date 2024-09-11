import {
    Flex,
    Heading,
    Text,
    ListItem,
    Image,
    List,
    Link,
  } from "@chakra-ui/react";
  import { ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
  import { ImPointRight } from "react-icons/im";
  
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
              Know who
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                I'M
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
                RUTURAJ LAHU SALUNKHE{" "}
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
                Mumbai, India.
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              I am completed my <br />
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Bachelor of Science in Information Technology.(IT)
              </span>{" "}
              <br />
              from
              <Link
                href="https://kirticollege.edu.in/"
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
                  DES's Kirti M. Doongursee College of Arts,
                  <br /> Science & Commerce{" "}
                </span>
              </Link>
              in 2021
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Although I dont have any experience,
              <br /> i am fluent in{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Javascript
              </span>{" "}
              and in{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                MERN STACK
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              I did a{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                Full Stack Development Course in{" "}
                <Link
                  href="https://rstforum.net/"
                  _hover={{
                    textDecor: "none",
                    color: "blue.900",
                  }}
                >
                  RST Forum
                </Link>
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="bold"
              mt="3"
              mb="2"
            >
              Apart from coding, some other activities that I love to do!
            </Text>
            {/* <List>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Playing Football
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Video games
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Dedicated towards Fitness
              </ListItem>
            </List> */}
            {/* Trying new Unstyled List with icon#*/}
            <List spacing={2}>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
                paddingLeft="30px"
              >
                <ListIcon as={ImPointRight} color="green.500" />
                Playing Kabaddi & Cricket
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
                paddingLeft="30px"
              >
                <ListIcon as={ImPointRight} color="green.500" />
                Climbing a Mountains
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
                paddingLeft="30px"
              >
                <ListIcon as={ImPointRight} color="green.500" />
                Fitness Freak
              </ListItem>
            </List>
          </Flex>
          <Image mx="10" src="about.png" w="360px" h="300px" />
        </Flex>
      </Flex>
    );
  };
  
  export default About;
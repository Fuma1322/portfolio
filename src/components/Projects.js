import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { Card, Stack, CardBody, CardFooter } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    title: "Clinic Ease",
    description:
      "ClinicEase is a comprehensive healthcare management application designed to streamline appointment scheduling, improve resource utilization, and enhance patient convenience. By eliminating long queues at clinics and enabling users to book appointments online, ClinicEase optimizes clinic workflows and reduces waiting times.",
    image:
      "Clinic.png",
    browseLink: "https://github.com/Fuma1322/ClinicEase",
    liveLink: "http://www.clinicease.tech",
  },
  {
    id: 2,
    title: "Mang Mosotho",
    description:
      "Mang Mosotho is a high-traffic web application designed to engage customers, build brand awareness, and drive revenue. Our platform allows users to search for individuals by name and retrieve their contact information, with customizable privacy settings. I worked on this project while collaborating at a Tech start-up based in Maseru, Lesotho",
    image:
      "mang.png",
    browseLink: "https://github.com/Nerd-Culture-09/mang-mosotho",
    liveLink: "https://www.mangmosotho.com",
  },
  {
    id: 3,
    title: "Cryptrack",
    description:
      "Cryptrack is a cryptocurrency tracker app built using Next.js, TypeScript, and Tailwind CSS. The app allows users to monitor the prices and trends of various cryptocurrencies in real-time. The app is designed to be user-friendly and mobile-responsive, providing essential information such as the current price, 24-hour price change, market cap, and trading volume for selected cryptocurrencies.",
    image:
      "Cryptrack.png",
    browseLink: "https://github.com/Fuma1322/Cryptrack",
    liveLink: "https://cryptrack-five.vercel.app",
  },
];

const Project = () => {
  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
      py="10"
      wrap="wrap"
      direction="column"
      borderBottom="1px"
      borderColor="purple.200"
      backdropFilter="saturate(180%) blur(10px)"
      shadowColor="blue"
      shadow="3px 2px purple"
      _hover={{ shadow: "2px 2px 2px 2px blue" }}
      rounded="md"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap="10"
        borderBottom="2px"
        borderColor="purple.400"
        shadow="lg"
        mt="10"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex mx="10" direction="column">
          <Heading
            as="h2"
            fontSize={{ lg: "5xl", base: "3xl" }}
            fontWeight="bold"
          >
            My Recent{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>Projects</span>
          </Heading>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            style={{ color: "blue.800" }}
          >
            Here are a few{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>
              Projects
            </span>{" "}
            I've worked on recently.
          </Text>
          <Text
            fontSize={{ lg: "2xl", base: "xl" }}
            fontWeight="medium"
            mt="3"
            mb="2"
            color="gray.500"
          >
            My projects make use of a variety of the latest technology tools.
            My best experience is creating FullStack projects and deploying them
            as web applications using cloud infrastructure.
          </Text>
        </Flex>
        {/* <Image mx="10" src="code.png" w="300px" h="300px" rounded="xl"/> */}
      </Flex>

      {/* Map over the projects array */}
      <Flex wrap="wrap" gap="10" justifyContent="center" mt="10">
        {projects.map((project) => (
          <Card key={project.id} maxW="sm">
            <CardBody>
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{project.title}</Heading>
                <Text>{project.description}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  as="a"
                  href={project.browseLink}
                  target="_blank"
                  variant="ghost"
                  colorScheme="blue"
                >
                  Browse Code
                </Button>
                <Button
                  as="a"
                  href={project.liveLink}
                  target="_blank"
                  variant="solid"
                  colorScheme="blue"
                >
                  View Live
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default Project;

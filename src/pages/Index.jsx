import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="purple.600" color="white" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Supercharge Your Business with Our SaaS Solution
              </Heading>
              <Text fontSize="xl" mb={8}>
                Streamline your operations, boost productivity, and grow your business with our powerful software.
              </Text>
              <Button colorScheme="white" size="lg">
                Get Started
              </Button>
            </Box>
            <Flex justify="center" align="center">
              <Image src="https://images.unsplash.com/photo-1634496994539-ebffdbfe6e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MDk3OTg0OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Dashboard" />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Icon as={FaRocket} boxSize={12} color="purple.600" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Fast and Efficient
              </Heading>
              <Text>Our software is built for speed and efficiency, allowing you to get more done in less time.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaChartLine} boxSize={12} color="purple.600" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Actionable Insights
              </Heading>
              <Text>Gain valuable insights into your business with our comprehensive analytics and reporting tools.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaUsers} boxSize={12} color="purple.600" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Collaborative Platform
              </Heading>
              <Text>Foster collaboration and teamwork with our intuitive and user-friendly platform.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Take Your Business to the Next Level?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Sign up today and experience the power of our SaaS solution for yourself.
          </Text>
          <Button colorScheme="purple" size="lg">
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;

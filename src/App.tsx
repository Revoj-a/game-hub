import "./App.css";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box p={8}>
      <Heading mb={4}>Welcome to Game Hub</Heading>
      <Text mb={4}>
        This is a React + TypeScript + Chakra UI setup using Vite.
      </Text>
      <Button colorScheme="teal">Click Me</Button>
    </Box>
  );
}

export default App;

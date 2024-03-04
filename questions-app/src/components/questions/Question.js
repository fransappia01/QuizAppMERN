import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import './Question.css'

const Question = ({ pregunta, opciones, onRespuesta }) => {
  return (
    <Box>
      <Text fontSize="xl" mb={30} textAlign="center">
        {pregunta}
      </Text>
      <Flex direction="column" align="center">
        <Flex justify="space-between" mb={2} width="100%">
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            width="48%"
            borderRadius="8px"
            cursor="pointer"
            px = {140}
            py = {80}
            marginTop={15}
            marginBottom={15}
            onClick={() => onRespuesta(opciones[0])}
            className="option-button"
          >
            {opciones[0]}
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            width="48%"
            borderRadius="5px"
            cursor="pointer"
            px = {140}
            py = {80}
            marginTop={15}
            marginBottom={15}
            onClick={() => onRespuesta(opciones[1])}
            className="option-button"
          >
            {opciones[1]}
          </Button>
        </Flex>
        <Flex justify="space-between" mb={2} width="100%">
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            width="48%"
            borderRadius="5px"
            cursor="pointer"
            px = {140}
            py = {80}
            onClick={() => onRespuesta(opciones[2])}
            className="option-button"
          >
            {opciones[2]}
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            width="48%"
            borderRadius="5px"
            cursor="pointer"
            px = {140}
            py = {80}
            onClick={() => onRespuesta(opciones[3])}
            className="option-button"
          >
            {opciones[3]}
          </Button>
        </Flex>
      </Flex>
      <div className="semicircle"></div>
    </Box>
  );
};

export default Question;

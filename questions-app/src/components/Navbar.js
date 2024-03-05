import React from 'react';
import { Flex, Box, Spacer, Heading, Button } from '@chakra-ui/react';
import icon from '../icon.png';

const Navbar = ({ nombreUsuario }) => {

    const bgColor = window.innerWidth < 768 ? 'rgb(198, 221, 255)' : '#4C75DA'; //defino colores para PC y celu distintos porque cambian

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      bg={bgColor}
      color="black" 
      direction={{ base: 'column', md: 'row' }}
    >
      <Box>
        <Heading as="h1" size="md" ml={20}>
          Depre App
        </Heading>
      </Box>
      <Spacer />
      <Box
      mr = {5}
      p = {5}
      >
        { nombreUsuario } {/* el nombre del usuario registrado */}
      </Box>
      <Box>
        <img src={icon} alt="Foto" style={{ width: '50px', height: '50px' }} />
      </Box>

    </Flex>
  );
};

export default Navbar;

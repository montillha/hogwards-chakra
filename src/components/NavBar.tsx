import { Box, Flex, Text, Spacer, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Charts', path: '/charts' },
  ];

  return (
    <Box px={8} py={4} >
      <Flex align="center">
        {/* Logo ou nome da aplicação */}
        <Text
          fontWeight="bold"
          fontSize="2xl"
          cursor="pointer"
          onClick={() => navigate('/')}
        >
          Hogwarts Characters
        </Text>
        <Spacer />
        <HStack>
          {links.map((link) => (
            <Text
              key={link.path}
              mr={4}
              fontWeight="medium"
              fontSize="lg"
              cursor="pointer"
              onClick={() => navigate(link.path)}
              _hover={{
                color: 'gray.700',
                textDecoration: 'underline',
                
              }}
            >
              {link.label}
            </Text>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;

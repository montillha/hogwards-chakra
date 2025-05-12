import { Card,  Image, Text, Box } from "@chakra-ui/react";
type CharacterType = {
  id:string;
  name: string;
  specie: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  image: string;
};

const houseColor =(house:string)=>{
  switch(house){
    case 'Gryffindor':
      return '#3b0c0c'; 
    case 'Slytherin':
      return '#072410'; 
    case 'Ravenclaw':
      return '#1A2238'; 
    case 'Hufflepuff':
      return '#4e430c' 
    default:
      return '#1C1A1D'; 
  }
};


const Character = ({ character }:{character:CharacterType}) => {
  return ( 

      <Box width="100%" maxW="xl"  mb="4">
      <Card.Root
          display="flex"
          flexDirection="row"
          overflow="hidden"
          maxW="xl"
          borderRadius="lg"
          boxShadow="md"
          m="4"
          p="4"
          bg= {houseColor(character.house)}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "2xl",
            /*cursor: "pointer",*/
          }}
  

        >
          <Image
            objectFit="cover"
            maxW="200px"
            src={character.image || "https://placehold.co/200x300?text=No+Image"}
            alt={character.name}
            borderRadius="md"
          />
          <Box ml="4">
            <Card.Body>
              <Text fontSize="xl" fontWeight="bold" mb="2">
                {character.name}
              </Text>
              <Text mb="2">Specie: {character.specie}</Text>
              <Text mb="2">Gender: {character.gender}</Text>
              <Text mb="2">Date of Birth: {character.dateOfBirth}</Text>
              <Text mb="2">House: {character.house}</Text>
            
            </Card.Body>
          </Box>
        
        </Card.Root>
        </Box>
  


  );
};

export default Character;

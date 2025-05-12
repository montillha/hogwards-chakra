
import { BirthdayChart } from "@/components/Charts/BirthdayChart";
import { GenderChart } from "@/components/Charts/GenderChart";
import { HouseChart } from "@/components/Charts/HouseChart";
import { useCharacterContext } from "@/context/Character.Context";
import { Box, Stack } from "@chakra-ui/react";
import { useEffect } from "react";

const Charts = () => {
  const { characters, setCharacters } = useCharacterContext() || {
    characters: [],
    setCharacters: () => {},
  };
  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      const data = await response.json();
      const Officialdata = data.slice(0, 200).map((character: any) => ({
        id: character.id,
        name: character.name,
        specie: character.species,
        dateOfBirth: character.dateOfBirth,

        gender: character.gender,
        house: character.house,
        image: character.image,
      }));
      setCharacters(Officialdata);
    }

    fetchCharacters();
  }, []);

  return (

    <Stack mt="5">
        <Box w="100%" maxW="500px" mx="auto" mb="6">
            <HouseChart/>
        </Box>
        <Box w="100%" maxW="500px" mx="auto" mb="6">
            <GenderChart/>
        </Box>
        <Box w="100%" maxW="500px" mx="auto" mb="6">
            <BirthdayChart/>
        </Box>
    </Stack>
    
  );
};

export default Charts;

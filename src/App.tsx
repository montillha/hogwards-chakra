
import { useEffect, useState } from 'react';
import Search from './components/Search'
import Character from './components/Character';
import { Box, Flex, Heading, Toast } from '@chakra-ui/react';

function App() {
  type CharacterType={
    id:string;
    name:string;
    specie:string;
    dateOfBirth: string;
    gender: string;
    house:string;
    image:string;
  }
  const[characters,setcharacters] = useState<CharacterType[]>([]);
  const[search,setSearch]= useState<string>("");

  useEffect(()=>{
    async function fetchCharacters(){
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      const data = await response.json();
      const Officialdata: CharacterType[] = data.slice(0, 200).map((character: any) => ({
        id:character.id,
        name: character.name,
        specie: character.species,
        dateOfBirth: character.dateOfBirth,
        gender: character.gender,
        house: character.house,
        image: character.image,
      }));
      setcharacters(Officialdata)
    }
    fetchCharacters();
  

  },[])
  


  return (
    <>
    <Heading as='h1'size="4xl" textAlign="center" mt="4" color="gray.800"> Hogwarts Characters</Heading>
    <Search search={search} setSearch={setSearch}/>
    <Flex  direction="column" // força em coluna
        justify="center" // centraliza na vertical
        align="center" // centraliza na horizontal
        minH="100vh"
        gap="4"
        p="4">
    {characters.filter((character)=>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((character)=>(
      <Character character ={character} key={character.id} ></Character>
    ))}
    </Flex>
  
    </>
  )
}

export default App

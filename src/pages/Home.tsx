
import Character from "@/components/Character"
import Search from "@/components/Search"
import { useCharacterContext } from "@/context/Character.Context"
import { Flex, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Home= () => {
   
      const { characters, setCharacters } = useCharacterContext() || { characters: [], setCharacters: () => {} };  
      const[search,setSearch]= useState<string>("");
    
      useEffect(()=>{
        async function fetchCharacters(){
          const response = await fetch('https://hp-api.onrender.com/api/characters');
          const data = await response.json();
          const officialData = data.slice(0, 200).map((character: any) => ({
            id:character.id,
            name: character.name,
            specie: character.species,
            dateOfBirth: character.dateOfBirth,
            gender: character.gender,
            house: character.house,
            image: character.image,
          }));
          setCharacters(officialData);
          console.log(officialData);
        }
        fetchCharacters();
      
    
      },[])
      
  return (
        <>
        <Heading as='h1'size="4xl" textAlign="center" mt="4" color="gray.800"> Hogwarts Characters</Heading>
        <Search search={search} setSearch={setSearch}/>
        <Flex  direction="column" 
            justify="center"
            align="center" 
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

export default Home
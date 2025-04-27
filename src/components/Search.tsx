import { Box, Input, InputGroup } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

const Search = ({search,setSearch}:SearchProps) => {
  return (
    <Box mt="5" maxW="500px" mx="auto" >
        <InputGroup startElement={<LuSearch/>}>
        <Input placeholder='Type a hogwarts character' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </InputGroup >

        
    </Box>

  )
}

export default Search
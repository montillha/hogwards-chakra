
import React, { createContext, useState, useContext, ReactNode } from "react";

type CharacterType = {
  id: string;
  name: string;
  specie: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  image: string;
};

interface CharacterContextType {
  characters: CharacterType[];
  setCharacters: React.Dispatch<React.SetStateAction<CharacterType[]>>;
}


const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = (): CharacterContextType | undefined => {
  return useContext(CharacterContext);
};

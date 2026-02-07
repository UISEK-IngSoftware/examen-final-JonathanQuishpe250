import axios from 'axios';

export interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt: string;
  image: string;
}

export interface CharactersResponse {
  items: Character[];
}

const API_BASE_URL = 'https://futuramaapi.com/api/characters';

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<CharactersResponse>(API_BASE_URL, {
      params: {
        orderBy: 'id',
        orderByDirection: 'asc',
        page: 1,
        size: 50
      }
    });
    
    return response.data.items;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Failed to fetch characters from Futurama API');
  }
};
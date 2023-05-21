import axios, { AxiosResponse } from 'axios';
import { Character } from '../../pages/characterDetails/model/types';

const BASE_URL = 'https://swapi.dev/api/people';

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};

export const fetchCharacters = async (page: number): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${BASE_URL}/?page=${page}`
    );
    const charactersWithId = response.data.results.map((character, index) => ({
      ...character,
      id: `${page}-${index + 1}`,
    }));

    return {
      ...response.data,
      results: charactersWithId,
    };
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
};

export const searchCharacters = async (
  searchTerm: string
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${BASE_URL}/?search=${searchTerm}`
    );
    const charactersWithId = response.data.results.map((character, index) => ({
      ...character,
      id: `search-${index + 1}`,
    }));

    return {
      ...response.data,
      results: charactersWithId,
    };
  } catch (error) {
    throw new Error('Failed to search characters');
  }
};

export const getCharacterById = async (id: string): Promise<Character> => {
  try {
    const response: AxiosResponse<Character> = await axios.get(
      `${BASE_URL}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch character by ID');
  }
};

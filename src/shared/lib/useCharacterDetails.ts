import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../api/apiService';
import { Character } from '../../pages/characterDetails/model/types';

export const useCharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  const fetchCharacter = useCallback(async () => {
    try {
      const fetchedCharacter = await getCharacterById(id ?? '');
      setCharacter(fetchedCharacter);
    } catch (error) {
      console.log('Failed to fetch character:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return character;
};

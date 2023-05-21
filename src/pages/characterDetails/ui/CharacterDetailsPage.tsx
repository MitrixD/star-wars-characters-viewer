import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../model/types';
import { getCharacterById } from '../../../shared/api/apiService';
import { CharacterDetailsCard } from '../../../widgets/CharacterDetailsCard';
import { Container, Grid, Typography, Skeleton } from '@mui/material';
import { BackToHomeButton } from '../../../shared/ui/BackToHomeButton/BackToHomeButton';
import { characterTextFields } from '../../../widgets/CharacterDetailsCard/model/consts';

export const CharacterDetailsPage: React.FC = () => {
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

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <BackToHomeButton />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Character Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {character ? (
            <CharacterDetailsCard character={character} />
          ) : (
            characterTextFields.map((field) => (
              <Grid item xs={12} height={55} marginBottom={2} key={field.name}>
                <Skeleton height={55} variant="rectangular" animation="wave" />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

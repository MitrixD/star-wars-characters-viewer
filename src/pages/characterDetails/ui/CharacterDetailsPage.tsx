import React from 'react';
import { CharacterDetailsCard } from '../../../widgets/CharacterDetailsCard';
import { Container, Grid, Typography, Skeleton } from '@mui/material';
import { BackToHomeButton } from '../../../shared/ui/BackToHomeButton/BackToHomeButton';
import { characterTextFields } from '../../../widgets/CharacterDetailsCard/model/consts';
import { useCharacterDetails } from '../../../shared/lib/useCharacterDetails';

export const CharacterDetailsPage: React.FC = React.memo(() => {
  const character = useCharacterDetails();

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
});

CharacterDetailsPage.displayName = 'CharacterDetailsPage';

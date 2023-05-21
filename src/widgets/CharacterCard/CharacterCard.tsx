import React from 'react';
import { Character } from '../../pages/characterDetails/model/types';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { CharacterAvatarIcon } from '../../shared/ui/CharacterAvatarIcon/CharacterAvatarIcon';
import { styled } from '@mui/material/styles';

interface CharacterCardProps {
  character: Character;
}

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
}));

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <StyledCard sx={{ height: '100%' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent className="flex justify-center items-center">
          <CharacterAvatarIcon
            sx={{
              width: '100%',
              height: '100%',
              color: 'white',
              marginBottom: 3,
            }}
          />
          <Divider sx={{ width: '100%', marginY: 1 }} />
          <Typography variant="h6" component="div" textAlign="center">
            {character.name}
          </Typography>
        </CardContent>
      </Card>
    </StyledCard>
  );
};

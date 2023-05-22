import React, { ChangeEvent, useCallback, useState } from 'react';
import { Character } from '../../pages/characterDetails/model/types';
import { Grid, TextField, Box } from '@mui/material';
import { CancelButton } from '../../shared/ui/CancelButton/CancelButton';
import { SaveButton } from '../../shared/ui/SaveButton/SaveButton';
import { EditButton } from '../../shared/ui/EditButton/EditButton';
import { characterTextFields } from './model/consts';

interface CharacterDetailsCardProps {
  character: Character;
}

export const CharacterDetailsCard: React.FC<CharacterDetailsCardProps> = ({
  character,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(character);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value,
      }));
    },
    []
  );

  const handleEdit = useCallback(() => {
    setEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    setEditing(false);
  }, []);

  const handleCancel = useCallback(() => {
    if (editedCharacter !== character) {
      setEditedCharacter(character);
    }
    setEditing(false);
  }, [character, editedCharacter]);

  return (
    <Box>
      <Grid container spacing={2}>
        {characterTextFields.map((field) => (
          <Grid item xs={12} key={field.name}>
            <TextField
              inputProps={{
                'data-testid': `${field.name}-field`,
              }}
              key={field.name}
              name={field.name}
              label={field.label}
              fullWidth
              value={editedCharacter[field.name as keyof Character] || ''}
              disabled={!editing}
              onChange={handleInputChange}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          {!editing ? (
            <EditButton handleEditClick={handleEdit} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <SaveButton handleSaveClick={handleSave} />
              </Grid>
              <Grid item xs={6}>
                <CancelButton handleCancelClick={handleCancel} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

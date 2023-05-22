import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getCharacterById } from '../../../shared/api/apiService';
import { CharacterDetailsPage } from './CharacterDetailsPage';

jest.mock('../../../shared/api/apiService');

describe('CharacterDetailsPage', () => {
  test('renders character details when data is available', async () => {
    const characterData = { name: 'Luke Skywalker', height: '172' };
    (getCharacterById as jest.Mock).mockResolvedValue(characterData);

    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Routes>
          <Route path="/characters/:id" element={<CharacterDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const nameElement = screen.getByTestId('name-field') as HTMLInputElement;
      const heightElement = screen.getByTestId(
        'height-field'
      ) as HTMLInputElement;
      expect(nameElement.value).toEqual('Luke Skywalker');
      expect(heightElement.value).toEqual('172');
    });
  });
});

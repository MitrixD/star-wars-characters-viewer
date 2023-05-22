import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  fetchCharacters,
  searchCharacters,
} from '../../../shared/api/apiService';
import { HomePage } from './HomePage';

jest.mock('../../../shared/api/apiService', () => ({
  fetchCharacters: jest.fn(),
  searchCharacters: jest.fn(),
}));

describe('HomePage', () => {
  jest.setTimeout(10000);
  test('renders characters when data is available', async () => {
    const charactersData = {
      results: [{ name: 'Luke Skywalker' }],
      count: 1,
    };
    (fetchCharacters as jest.Mock).mockResolvedValue(charactersData);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const characterCard = screen.getByTestId('character-card');
      const characterNameLabel = screen.getByTestId(
        'character-card-name-label'
      );

      expect(characterCard).toBeDefined();
      expect(characterNameLabel).toBeDefined();
      expect(characterNameLabel.textContent).toEqual('Luke Skywalker');
    });
  });

  test('renders loading indicator when data is being fetched', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    (fetchCharacters as jest.Mock).mockReturnValue(new Promise(() => {}));

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const loadingIndicator = screen.getByTestId('loading-indicator');
    expect(loadingIndicator).toBeDefined();
  });

  test('renders characters based on search results', async () => {
    const searchResults = {
      results: [
        { name: 'Luke Skywalker', url: 'https://swapi.dev/api/people/1/' },
      ],
      count: 1,
    };
    (searchCharacters as jest.Mock).mockResolvedValue(searchResults);

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const searchInput = screen.getByTestId('search-input') as HTMLInputElement;
    const searchButton = screen.getByTestId('search-button');

    await waitFor(() => {
      fireEvent.change(searchInput, { target: { value: 'Luke' } });
      fireEvent.click(searchButton);
    });

    const characterName = await screen.findByText('Luke Skywalker');
    expect(characterName).toBeDefined();
  });
});

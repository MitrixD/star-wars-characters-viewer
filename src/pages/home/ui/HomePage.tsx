import React, { useCallback, useEffect, useState } from 'react';
import {
  fetchCharacters,
  searchCharacters,
} from '../../../shared/api/apiService';
import { SearchBar } from '../../../widgets/SearchBar';
import { CharacterCard } from '../../../widgets/CharacterCard';
import { Pagination } from '../../../widgets/Pagination';
import { Character } from '../../characterDetails/model/types';
import { CircularProgress, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../../shared/lib/getIdFromUrl';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(sessionStorage.getItem('currentPage') || '1')
  );
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCharactersData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchCharacters(currentPage);
      setCharacters(response.results);
      setTotalPages(Math.ceil(response.count / 10));
    } catch (error) {
      console.log('Failed to fetch characters:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  const searchCharactersData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await searchCharacters(searchTerm);
      setCharacters(response.results);
      setTotalPages(Math.ceil(response.count / 10));
    } catch (error) {
      console.log('Failed to search characters:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm !== '') {
      searchCharactersData();
    } else {
      fetchCharactersData();
    }
  }, [searchTerm, fetchCharactersData, searchCharactersData]);

  useEffect(() => {
    sessionStorage.setItem('currentPage', String(currentPage));
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== '') {
      setCurrentPage(1);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </Grid>

      <Grid
        item
        xs={12}
        justifyContent="center"
        className={styles.characterContainer}
      >
        {/* Render characters and total pages when data is available */}
        {!loading && (
          <Grid
            className={styles.characterGrid}
            container
            spacing={3}
            justifyContent="center"
          >
            {characters.map((character) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                lg={3}
                xl={2}
                key={character.name}
              >
                <Link
                  to={`/character/${getIdFromUrl(character.url)}`}
                  style={{ textDecoration: 'none' }}
                >
                  <CharacterCard character={character} />
                </Link>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Render loading indicator in the center */}
        {loading && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.loadingContainer}
          >
            <CircularProgress />
          </Grid>
        )}
      </Grid>

      {totalPages > 0 && (
        <Grid item xs={12} className={styles.paginationContainer}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Grid>
      )}
    </Grid>
  );
};

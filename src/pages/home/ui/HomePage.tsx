import React from 'react';
import { SearchBar } from '../../../widgets/SearchBar';
import { CharacterCard } from '../../../widgets/CharacterCard';
import { Pagination } from '../../../widgets/Pagination';
import { CircularProgress, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../../shared/lib/getIdFromUrl';
import { useHomePage } from '../../../shared/lib/useHomePage';
import { CHARACTER_DETAILS_PAGE } from '../../characterDetails';
import { HOME_PAGE } from '../model/consts';
// @ts-ignore
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const {
    characters,
    currentPage,
    totalPages,
    loading,
    handlePageChange,
    handleSearch,
  } = useHomePage();

  return (
    <Grid container justifyItems="center" justifyContent="center" spacing={3}>
      <Grid item xs={12} className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </Grid>

      <Grid
        item
        xs={12}
        justifyContent="center"
        className={styles.characterContainer}
      >
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
                  to={`${HOME_PAGE}${CHARACTER_DETAILS_PAGE}/${getIdFromUrl(
                    character.url
                  )}`}
                  style={{ textDecoration: 'none' }}
                >
                  <CharacterCard character={character} />
                </Link>
              </Grid>
            ))}
          </Grid>
        )}

        {loading && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.loadingContainer}
          >
            <CircularProgress data-testid={'loading-indicator'} />
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

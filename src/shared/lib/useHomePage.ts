import { useCallback, useEffect, useState } from 'react';
import { Character } from '../../pages/characterDetails/model/types';
import { fetchCharacters, searchCharacters } from '../api/apiService';

const ITEMS_PER_PAGE = 10;
const DEFAULT_PAGE = 1;

export const useHomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(sessionStorage.getItem('currentPage') || `${DEFAULT_PAGE}`)
  );
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCharactersData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchCharacters(currentPage);
      setCharacters(response.results);
      setTotalPages(Math.ceil(response.count / ITEMS_PER_PAGE));
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
      setTotalPages(Math.ceil(response.count / ITEMS_PER_PAGE));
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
      setCurrentPage(DEFAULT_PAGE);
    }
  };

  return {
    characters,
    currentPage,
    totalPages,
    loading,
    handlePageChange,
    handleSearch,
  };
};

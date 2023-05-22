import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      sx={{
        borderColor: 'black',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: 'black',
          },
      }}
      value={searchTerm}
      onChange={handleInputChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      }}
      inputProps={{ 'data-testid': 'search-input' }}
      data-testid={'search-bar'}
      placeholder="Search characters"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {searchTerm && (
              <IconButton
                data-testid={'clear-search-button'}
                onClick={handleClear}
              >
                <ClearIcon />
              </IconButton>
            )}
            <IconButton data-testid={'search-button'} onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

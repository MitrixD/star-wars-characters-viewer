import React, { useCallback } from 'react';
import { Pagination as MuiPagination, Stack } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, pageNumber: number) => {
      onPageChange(pageNumber);
    },
    [onPageChange]
  );

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        size={'large'}
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'black',
          },
        }}
      />
    </Stack>
  );
};

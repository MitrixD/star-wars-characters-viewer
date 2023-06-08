import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {
  CharacterDetailsPage,
  CHARACTER_DETAILS_PAGE,
} from './characterDetails';
import { HOME_PAGE, HomePage } from './home';

export const Routing = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<HomePage />} />
      <Route
        path={`${HOME_PAGE}${CHARACTER_DETAILS_PAGE}/:id`}
        element={<CharacterDetailsPage />}
      />
      <Route path="*" element={<Navigate to={HOME_PAGE} replace />} />
    </Routes>
  );
};

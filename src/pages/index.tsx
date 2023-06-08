import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CharacterDetailsPage } from './characterDetails';
import { HomePage } from './home';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
    </Routes>
  );
};

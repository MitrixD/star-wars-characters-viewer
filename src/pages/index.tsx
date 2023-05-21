import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { CharacterDetailsPage } from './characterDetails';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
    </Routes>
  );
};

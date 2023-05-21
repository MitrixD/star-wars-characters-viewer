import React from 'react';
import { Container } from '@mui/material';
import { AppHeader } from '../widgets/AppHeader';
import { withProviders } from './providers';
import { Routing } from '../pages';

const App: React.FC = () => {
  return (
    <>
      <AppHeader />

      <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        <Routing />
      </Container>
    </>
  );
};

export default withProviders(App);

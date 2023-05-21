import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import appBarLogoImage from '../../shared/assets/logo1234.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './AppHeader.module.css';

export const AppHeader: React.FC = () => {
  return (
    <AppBar
      sx={{ backgroundColor: 'black' }}
      position="static"
      className="flex items-center"
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box className={styles.logoContainer}>
          <Button component={Link} to="/" sx={{ marginRight: 2 }}>
            <img
              src={appBarLogoImage}
              alt="Big Image"
              className={styles.logoImage}
            />
          </Button>
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            STAR WARS CHARACTERS VIEWER
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

import React from 'react';
import { ThemeProvider } from '@emotion/react';
import AppRouter from '../../pages/Router';
import Navbar from '../../pages/Layout/Navbar/Navbar';
import SubNav from '../../pages/Layout/Navbar/SubNavbar';
import theme from './Theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNav />

      <main className="flex-grow mt-[calc(var(--navbar-height) + var(--subnavbar-height))]">
        <AppRouter />
      </main>
    </div>
  </ThemeProvider>
);

export default App;

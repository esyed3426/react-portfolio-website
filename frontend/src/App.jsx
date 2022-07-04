import React from 'react';
import { CssBaseline} from '@mui/material';
import { ESNavBar } from './components/ESNavBar';
import { ESDynamicGreeting } from './components/ESDynamicGreeting';

const App = () => {

  return (
    <>
      <CssBaseline />
      <ESNavBar />
      <ESDynamicGreeting />
    </>
  );
}

export default App;

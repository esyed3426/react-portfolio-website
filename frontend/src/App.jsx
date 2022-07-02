import React from 'react';
import { CssBaseline} from '@mui/material';
import TypeWriter from 'typewriter-effect';
import { ESNavBar } from './components/ESNavBar';



const App = () => {
  return (
    <>
      <CssBaseline />
        <ESNavBar />
        <h2 sx={{fontFamily: 'Times New Roman'}}>
          <TypeWriter 
          sx={{fontFamily: 'Montserrat'}}
          options={{
            fontSize: "100px",
            strings: ['Hey!', 'Hello!', "Greetings!", "Wagwan!?"],
            autoStart: true,
            pauseFor: 5000,
            loop: true, 
          }}
         />
        </h2>
    </>
  );
}

export default App;

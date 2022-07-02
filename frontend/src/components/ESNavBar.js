import React from 'react';
import {Button, AppBar, Toolbar, Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import dancing from './dancing.gif';

export const ESNavBar = () => {
    return (
        <AppBar id='appBar' position='sticky' sx={{bgcolor: 'transparent'}}>
          <Toolbar>
            <Box display='flex' flexGrow={1}>
              <Button sx={{border: '0'}} >
                <HomeIcon fontSize='large' sx={{color: 'black', flex:'1'}} ></HomeIcon>
              </Button>
              <Button fontSize='20px' sx={{marginLeft: '30px', color: 'black'}} onClick={() => alert("Why did you feel the need to click on me? So intrusive...")}>
                Ehsan Syed
              </Button>
            </Box>
            <Box>
              <Button sx={{border: '0'}} onClick={() => (window.open('https://c.tenor.com/ENHDUg2rG1cAAAAM/dance.gif'))}>
                <img
                  width="20px"
                  src={dancing}
                  alt='stick figure dancing'
                />
              </Button>
              <Button fontSize='20px' sx={{margin: '0px 10px', color: 'black'}} onClick={() => alert("You are navigating to the about me page.")} > 
                About Me
              </Button>
              <Button fontSize='20px' sx={{margin: '0px 10px', color: 'black'}} onClick={() => alert("You are going to look at some of my projects.")} > 
                My Projects
              </Button>
              <Button fontSize='20px' sx={{margin: '0px 10px', color: 'black'}} onClick={() => alert("You are going to take a look at my resume.")} > 
                Resume
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
    );
}
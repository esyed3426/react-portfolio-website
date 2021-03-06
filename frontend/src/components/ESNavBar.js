import {useState, useEffect} from 'react';
import {Button, AppBar, Toolbar, Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


export const ESNavBar = (props) => {

    const { themeColor, themeFont, themeFontWeight } = props;
    const [themeColorState, setThemeColorState] = useState(themeColor);
    const [themeFontState, setThemeFontState] = useState(themeFont);
    const [themeFontWeightState, setThemeFontWeightState] = useState(themeFontWeight);

    useEffect(() => {
        setThemeColorState(themeColor);
        setThemeFontState(themeFont);
        setThemeFontWeightState(themeFontWeight);
        console.log('mounting ESNavBar...');
        return () => {console.log('unmounting ESNavBar...')}
    }
    , [themeColor, themeFont, themeFontWeight]);

    return (
        <AppBar id='appBar' position='static' sx={{bgcolor: themeColorState}}>
          <Toolbar>
            <Box display='flex' flexGrow={1}>
              <Button sx={{border: '0'}} >
                <HomeIcon fontSize='large' sx={{color: 'white', flex:'1'}} ></HomeIcon>
              </Button>
              <Button sx={{marginLeft: '30px', color: 'white', fontFamily: themeFontState, fontWeight: themeFontWeightState, fontSize:'25px'}} onClick={() => alert("Why did you feel the need to click on me? So intrusive...")}>
                Ehsan Syed
              </Button>
            </Box>
            <Box>
              <Button sx={{margin: '0px 10px', color: 'white', fontFamily: themeFontState, fontWeight: themeFontWeightState, fontSize:'25px'}} onClick={() => alert("You are navigating to the about me page.")} > 
                About Me
              </Button>
              <Button sx={{margin: '0px 10px', color: 'white', fontFamily: themeFontState, fontWeight: themeFontWeightState, fontSize:'25px'}}  onClick={() => alert("You are going to look at some of my projects.")} > 
                My Projects
              </Button>
              <Button sx={{margin: '0px 10px', color: 'white', fontFamily: themeFontState, fontWeight: themeFontWeightState, fontSize:'25px'}}  onClick={() => alert("You are going to take a look at my resume.")} > 
                Resume
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
    );
}
import {useEffect} from 'react';
import WebFont from 'webfontloader';
import { CssBaseline} from '@mui/material';
import { ESNavBar } from './components/ESNavBar';
import { ESDynamicGreeting } from './components/ESDynamicGreeting';


const App = () => {
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Montserrat', 'Times New Roman', 'Finlandica', 'Bubblegum Sans']
        }
    })
  }, []);
  const themeColor = '#902bf5';
  const themeFont = 'Bubblegum Sans';
  const themeFontWeight = 'normal';
  
  return (
    <>
      <CssBaseline />
      <ESNavBar themeColor={themeColor} themeFont={themeFont} themeFontWeight={themeFontWeight}/>
      <ESDynamicGreeting themeColor={themeColor} themeFont={themeFont} themeFontWeight={themeFontWeight}/>
      <div style={{marginBottom: '1000px'}}></div>
    </>
  );
}

export default App;

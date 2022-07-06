import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypeWriter from 'typewriter-effect';
import backupDancer from './media/cartoonDancing.gif'


export const ESDynamicGreeting = (props) => {
    const { themeColor, themeFont, themeFontWeight } = props;
    const [themeColorState, setThemeColorState] = useState(themeColor);
    const [themeFontState, setThemeFontState] = useState(themeFont);
    const [themeFontWeightState, setThemeFontWeightState] = useState(themeFontWeight);
    useEffect(() => {
        setThemeColorState(themeColor);
        setThemeFontState(themeFont);
        setThemeFontWeightState(themeFontWeight);
        console.log('mounting ESDynamicGreeting...');
        return () => {console.log('unmounting ESDynamicGreeting...')}
    }
    , [themeColor, themeFont, themeFontWeight]);

    return (
        <div style={{
                display: 'flex',
                margin: '100px 80px 80px 80px'
            }}
        >
            <div // The typewriter greeting
                    style={{
                        color: themeColorState, 
                        fontFamily: themeFontState, 
                        fontSize: '40px',
                        position: 'relative'
                    }}

                > 
                    <TypeWriter 
                        options={{
                            strings: "Hi I'm Ehsan, welcome to my website!",
                            autoStart: true,
                            loop: false, 
                        }}
                    />
            </div>
            <motion.div // A backup dancer
                    style={{
                        color: themeColorState, 
                        fontFamily: themeFontState, 
                        position: 'absolute',
                        right: '450px'
                    }}
                    animate={{
                        scale: 1,
                        x: 20,
                    }}
                    initial={{
                        scale: 0,
                        x: 20
                    }}
                    transition={{
                        delay: 5,
                        duration: 1
                    }}
                    whileHover={{
                        rotate: 360,
                        transition: {
                            duration: 1
                        }
                    }}
                > 
                   <img 
                        src={backupDancer}
                        width='60px'
                        alt='backup dancer'
                   />
            </motion.div>
            <motion.div // Another backup dancer
                    style={{
                        color: themeColorState, 
                        fontFamily: themeFontState, 
                        position: 'absolute',
                        right: '350px'
                    }}
                    animate={{
                        scale: 1,
                        x: 20,
                    }}
                    initial={{
                        scale: 0,
                        x: 20
                    }}
                    transition={{
                        delay: 5,
                        duration: 1
                    }}
                    whileHover={{
                        scale: 1.3,
                        transition: {
                            duration: 1
                        }
                    }}
                > 
                   <img 
                        src={backupDancer}
                        width='60px'
                        alt='backup dancer'
                   />
            </motion.div>
        </div>
    );



}
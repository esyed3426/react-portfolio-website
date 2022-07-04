import { useEffect } from 'react';
import TypeWriter from 'typewriter-effect';
import WebFont from 'webfontloader';
import dancing from './media/cartoonDancing.gif'
import { motion } from 'framer-motion';

const themeFont = 'Montserrat';
const themeColor = '#F6BE00';

export const ESDynamicGreeting = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat', 'Times New Roman', 'Finlandica']
            }
        })
    }, []);

    return (
        <div style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-evenly', marginLeft: '50px', marginTop: '40px'}}>
            <div style={{marginRight: '300px'}}>
                <h2 style={{fontFamily: themeFont, fontSize:'40px', color: themeColor}}>
                    <TypeWriter 
                    options={{
                        strings: ['Hey!', 'Hello!', 'Greetings!', "What's up!?"],
                        autoStart: true,
                        pauseFor: 3000,
                        loop: true, 
                    }}
                    />
                </h2>
                <h2 style={{fontFamily: themeFont, fontSize: '25px', color: themeColor}}>
                    <TypeWriter 
                    options={{
                        strings: "I'm Ehsan, welcome to my website!",
                        autoStart: true,
                        loop: false, 
                    }}
                    />
                </h2>
            </div>
            <div>
                <div style={{marginTop: '70px', marginRight: '200px', display: 'flex'}} >
                    <motion.div animate={{scale: 1, rotate: 1800}} 
                        initial={{scale: 0}}
                        transition={{
                            ease: "linear",
                            duration: 8,
                            repeat: Infinity,
                            delay: 5,
                            repeatDelay: 20}}
                        whileHover={{scale: 1.2}}>
                        <img 
                            src={dancing}
                            alt='cartoon dancing'
                            width='70px'
                        />
                    </motion.div>
                    <motion.div animate={{scale: 1, rotate: 1800}} 
                        initial={{scale: 0}}
                        transition={{
                            ease: "linear",
                            duration: 8,
                            repeat: Infinity,
                            delay: 5,
                            repeatDelay: 20}}
                        whileHover={{scale: 1.2}}>
                            <div>
                                <img 
                                    src={dancing}
                                    alt='cartoon dancing'
                                    width='70px'
                                />
                            </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
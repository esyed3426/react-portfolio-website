import { useEffect } from 'react';
import TypeWriter from 'typewriter-effect';
import WebFont from 'webfontloader';
import dancing from './media/cartoonDancing.gif'

const themeFont = 'Montserrat';

export const ESDynamicGreeting = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat', 'Times New Roman', 'Finlandica']
            }
        })
    }, []);
    return (
        <div style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-evenly'}}>
            <div style={{marginTop: '80px'}}>
                <img 
                    src={dancing}
                    alt='cartoon dancing'
                    width='40px'
                />
                <img 
                    src={dancing}
                    alt='cartoon dancing'
                    width='40px'
                />
            </div>
            <div>
                <h2 style={{fontFamily: themeFont, fontSize:'40px'}}>
                    <TypeWriter 
                    options={{
                        strings: ['Hey!', 'Hello!', 'Greetings!', "What's up!?"],
                        autoStart: true,
                        pauseFor: 10000,
                        loop: true, 
                    }}
                    />
                </h2>
                <h2 style={{fontFamily: themeFont, fontSize: '25px'}}>
                    <TypeWriter 
                    options={{
                        strings: "I'm Ehsan, welcome to my website!",
                        autoStart: true,
                        loop: false, 
                    }}
                    />
                </h2>
            </div>
            <div style={{marginTop: '80px'}}>
                <img 
                    src={dancing}
                    alt='cartoon dancing'
                    width='40px'
                />
                <img 
                    src={dancing}
                    alt='cartoon dancing'
                    width='40px'
                />
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";


export function WelcomeSection() {

    return (

        <ParallaxBanner
            className='welcome-banner'
        >
            <Parallax className='welcome-content'
                translateY={[
                    '-50%',
                    '50%'
                ]}
                opacity={['2', '0']}
            >
                <h3>
                    Welcome to GetBakedWith.Me!
                </h3>
                <p> This site is both a collection of my favorite recipes, and an ongoing web development project.
                    Enjoy!
                </p>
            </Parallax>
        </ParallaxBanner>

    );
}
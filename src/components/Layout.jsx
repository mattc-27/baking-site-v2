import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import { InstagramLogo } from './InstagramLogo';
import Logo1 from '../../logo1.png';
import GithubLogo from '../assets/GithubLogo.png';

export function Layout() {

    const location = useLocation();

    const [isSolidBackground, setIsSolidBackground] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            // Adjust the scroll threshold based on your design
            const scrollThreshold = 100;
            // Check if the user has scrolled beyond the threshold
            setIsSolidBackground(window.scrollY > scrollThreshold);
            setLinkLight(window.scrollY > scrollThreshold);
        };
        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <>
            <header className={isSolidBackground ? 'solid-background' : 'transparent-background'}
            >
                <div className='header-content'>
                    <div className='header-title header-img'>
                        <Link to={'/'}
                        
                        >
                            {/*  <h1>GetBakedWithMe</h1>*/}
                            <img
                                className='headerLogoImg'
                                src={Logo1} /* style={{ maxHeight: '100%', width: 'auto' }} */ />
                        </Link>
                    </div>
                    <div className='header-nav'>
                        <Link
                            className={isSolidBackground ? 'light-text' : 'dark-text'} to={`/recipes`}>Recipes</Link>

                    </div>
                </div>
            </header>
            {/** **/}
            <Outlet />
            {/** **/}
            <footer>
                <div className='footer-container'>
                    <div className='footer-content' >
                        <div className='footer-icons'>
                            <Link to={'https://github.com/mattc-27/baking-site-v1'} >
                                <img src={GithubLogo} style={{ height: '30px', width: '30px', margin: '0.5%' }} />
                            </Link>
                            <Link style={{ height: '30px', width: '30px', margin: '0.5%' }}
                                to={'https://instagram.com/getbakedwith.me'} >
                                <InstagramLogo />
                            </Link>
                        </div>
                        <div className='footer-text'>
                            <p>Website by Matt Copeland</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}
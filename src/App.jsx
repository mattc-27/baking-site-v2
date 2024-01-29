import React, { useState, useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import ReactGA from 'react-ga4';

import { ParallaxProvider } from "react-scroll-parallax";

import './style.css';

import { Layout } from './components/Layout';
import { Home } from './Home';
import { RecipePage } from './components/RecipePage';
import { RecipeView } from './components/RecipeView';
import Recipes from './Recipes';


ReactGA.initialize([
    {
        trackingId: ''
    }
]);

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,

        children: [
            { index: true, element: <Home /> },
            {
                path: `/recipes`,
                element: <Recipes />,
            },
            {
                path: `/recipes/:id`,
                element: <RecipeView />,
            }
        ],
    }
])

export default function App() {

    return (
        <ParallaxProvider>
            <RouterProvider router={router} />
        </ParallaxProvider>
    );
    
}

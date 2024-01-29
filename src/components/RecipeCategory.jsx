import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import cinnRols from '../assets/cinnRols.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';


export function RecipeCategory({ item, category, recipes }) {

    const [recipeLinks, setRecipeLinks] = useState();

    const navigate = useNavigate();

    useEffect(() => {

        setRecipeLinks(item.recipes);

    }, [])

    console.log(recipeLinks)
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(!show);
    }

    const handleNav = () => {
        navigate('', { state: yourStateObject });
    }


    return (
        <>
             <Parallax className='recipe-category-content'>
                <div className='recipe-category-title'>
                    <h1>{category}</h1>
                </div>
                <div className='recipe-category-img'>
                    <img src={item.catImage} alt={category} />
                </div>
                {recipeLinks &&
                    <div className='recipe-category-list'>
                        <ul>
                            {recipeLinks.map((recipe) => (
                                <li key={recipe.id}>
                                    <Link
                                        className='recipe-list-link'
                                        to={`/recipes/${recipe.id}`} state={{ recipe: recipe }}
                                    >
                                        {recipe.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </Parallax>
        </>
    );
}
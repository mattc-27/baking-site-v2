import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { Element, scroller } from 'react-scroll'; // Import react-scroll
import { WelcomeSection } from './components/WelcomeSection';
import { RecipeCard } from './components/RecipeCard';
import { recipeCategories, recipeCollectionNew } from './data/recipes';
import { RecipeCategory } from './components/RecipeCategory';
import { RecipesAll } from './data/recipeCollection';

export function Recipes() {

  const location = useLocation();

  const [recipes, setRecipes] = useState('');
  const [recipesNew, setRecipesNew] = useState('');
  const [showToTopButton, setShowToTopButton] = useState(false);
  const [categoryRecipes, setCategoryRecipes] = useState('');
  const [recipeLinks, setRecipeLinks] = useState('');

  const [allRecipes, setAllRecipes] = useState('')

  useEffect(() => {

    setRecipesNew(recipeCollectionNew);

  }, [])

  console.log(recipesNew)

  const scrollToRecipe = (recipeId) => {
    scroller.scrollTo(recipeId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    setRecipes(recipeCategories)
    setRecipesNew(recipeCollectionNew)
    setCategoryRecipes()

  }, [])

  console.log(recipesNew)

  useEffect(() => {
    console.log(recipesNew)
  }, [recipes, setRecipes])

  const handleScroll = () => {
    // Adjust the offset value based on your design
    const offset = 200;

    // Check if the user has scrolled beyond the offset
    setShowToTopButton(window.scrollY > offset);
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='main-container'>
      <div className='scroll-y' >
        <div className='recipe-category-page-title'>
          <h1>Recipe Collection</h1>
        </div>
        <div className='recipe-category-cards' /*  className='recipe-category-section'*/ >
          {recipesNew &&
            recipesNew.map((item, index) => (
              < >
                <RecipeCategory
                  item={item}
                  //scrollToNextRecipe={() => scrollToRecipe(`recipe-card-section-${index + 1}`)}
                  recipes={item.recipes}
                  category={item.category}
                  key={item.id}
                />
              </>
            ))}
        </div>
      </div>
    </div>


  );
}

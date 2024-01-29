import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { WelcomeSection } from './components/WelcomeSection';
import { RecipeCard } from './components/RecipeCard';
//import { recipeCollection } from './data/recipes';
import { recipeCollection, recipeCollectionNew } from './data/recipes';


export function Home() {

  const [recipes, setRecipes] = useState('');
  const [defaultPosts, setDefaultPosts] = useState([]);

  useEffect(() => {
    setRecipes(recipeCollection)
  }, [])


  useEffect(() => {
    console.log(recipes)
  }, [recipes, setRecipes])

  useEffect(() => {
    async function fetchActivePosts() {
      try {
        setRecipes(recipeCollectionNew)
        setDefaultPosts(recipeCollectionNew)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchActivePosts();

  }, [])


  {/* */}
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  const handlePrevClick = () => {
    const prevRecipeIndex = currentRecipeIndex - 1;
    if (prevRecipeIndex >= 0) {
      setCurrentRecipeIndex(prevRecipeIndex);
    } else {
      const prevCategoryIndex = currentCategoryIndex - 1;
      if (prevCategoryIndex >= 0) {
        setCurrentCategoryIndex(prevCategoryIndex);
        setCurrentRecipeIndex(defaultPosts[prevCategoryIndex].recipes.length - 1);
      }
    }
  }
  const handleNextClick = () => {
    const nextRecipeIndex = currentRecipeIndex + 1;
    if (nextRecipeIndex < defaultPosts[currentCategoryIndex].recipes.length) {
      setCurrentRecipeIndex(nextRecipeIndex);
    } else {
      const nextCategoryIndex = currentCategoryIndex + 1;
      if (nextCategoryIndex < defaultPosts.length) {
        setCurrentCategoryIndex(nextCategoryIndex);
        setCurrentRecipeIndex(0);
      }
    }
  }

  return (
    <>
      <div className="welcome-section">
        <WelcomeSection />
      </div>
      <div className='recipe-card-section' >
        {defaultPosts.length > 1 && (
          <>
            <RecipeCard item={defaultPosts[currentCategoryIndex].recipes[currentRecipeIndex]} />
            <div className='next-back-buttons' >
              <button id='prevBtn' onClick={handlePrevClick}>Back</button>
              <button id='nextBtn' onClick={handleNextClick}>Next</button>
            </div>
          </>
        )}
      </div>

    </>
  );
}

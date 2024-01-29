import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { recipeCategories, recipeCollectionNew } from './data/recipes';
import { RecipeCategory } from './components/RecipeCategory';

export default function Recipes() {

  const location = useLocation();

  const [recipes, setRecipes] = useState('');
  const [recipesNew, setRecipesNew] = useState('');
  const [categoryRecipes, setCategoryRecipes] = useState('');


  useEffect(() => {
    setRecipesNew(recipeCollectionNew);
  }, [])

  useEffect(() => {
    setRecipes(recipeCategories)
    setRecipesNew(recipeCollectionNew)
    setCategoryRecipes()

  }, [])

  console.log(recipesNew)

  useEffect(() => {
    console.log(recipesNew)
  }, [recipes, setRecipes])



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

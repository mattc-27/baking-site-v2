import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { recipeCollection } from './data/recipes';

export default function Recipes() {

  const location = useLocation();

  const [recipes, setRecipes] = useState('');


  useEffect(() => {
    setRecipes(recipeCollection)
  }, [])

  return (
    <div className='main-container'>
      <div className='scroll-y' >
        <div className='recipe-category-page-title'>
          <h1>Recipe Collection</h1>
        </div>
        <div className='recipe-category-cards' /*  className='recipe-category-section'*/ >
          {recipes &&
            recipes.map((item, index) => (
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

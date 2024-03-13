import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';

//import { RecipeCategory } from './components/RecipeCategory';
import { recipeCollection } from './data/recipes';

const RecipeCategory = lazy(() => import('./components/RecipeCategory.jsx'));

export default function Recipes() {

  const location = useLocation();

  const [recipes, setRecipes] = useState('');


  useEffect(() => {
    setRecipes(recipeCollection)
  }, [])


  function Loading() {
    return (
      <>
        <p><i>Loading...</i></p>;
      </>

    )
  }

  return (
    <>
      <div className='recipe-category-section' >
        <div className='recipe-category-page-title'>
          <h1>Recipe Collection</h1>
        </div>
        <div className='recipe-category-cards' /*  className='recipe-category-section'*/ >
          {recipes &&
            recipes.map((item, index) => (
              <Suspense fallback={<Loading />}>
                < >
                  <RecipeCategory
                    item={item}
                    //scrollToNextRecipe={() => scrollToRecipe(`recipe-card-section-${index + 1}`)}
                    recipes={item.recipes}
                    category={item.category}
                    key={item.id}
                  />
                </>
              </Suspense>
            ))}
        </div>
      </div>
    </>
  );
}

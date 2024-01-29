import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export function RecipeView(props) {

    // const [recipe, setRecipe] = useState('');

    const [data, setData] = useState('');

    const { state } = useLocation();
    const recipe = state ? state.recipe : null;

    useEffect(() => {
        // You can perform any additional logic or API calls here based on the recipe data
        if (recipe) {
            console.log(recipe);
            // Fetch additional data or perform actions related to the recipe
        }
    }, [recipe]);

    const formatQuantity = (quantity, unit) => {
        // Check if quantity is greater than 1, and if so, pluralize the unit
        const pluralizedUnit = quantity > 1 ? `${unit}s` : unit;
        // Use the pluralized unit if it exists, otherwise use the original unit
        return pluralizedUnit || unit;
    };

    return (
        <div className='recipe-view-container'>
            <div className='recipe-content'>
                <div className='recipe-content-top'>
                    {recipe ?
                        <>
                            <div className='recipe-page-title'>
                                <h1>{recipe.title}</h1>
                            </div>
                        </>
                        : null
                    }
                </div>
                {/* <div className='other-details'>
                   Created          <p></p>
                </div>*/}
                <div className='recipe-main'>
                    <div className='ingredients-section'>

                        {/* 
                        <div className='ingredients-section-title'>
                            <h2>Ingredients</h2>
                        </div>*/}

                        {recipe ?
                            <>
                                <table className='recipe-table' >
                                    <tbody className='recipe-table-body'>
                                        <tr className='row-th' >
                                            <th className='row-th-lg'> Ingredients</th>
                                            <th className='row-th-lg'> Amount</th>
                                            <th className='row-th-lg'> Unit</th>

                                        </tr>
                                        {recipe.ingredients.map((item) => (
                                            <tr className='row-td' key={item.id} >
                                                <td className='row-lg'>{item.name}</td>
                                                <td className='row-sm'>
                                                    {item.quantity}
                                                </td>
                                                <td className='row-td-md'>
                                                    {`${formatQuantity(item.quantity, item.unit)}`}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                            : null
                        }
                    </div>
                    <div className='instructions-section'>
                        <div className='col'>
                            <div className='instructions-section-title'>
                                <h2>Instructions</h2>
                            </div>
                            {recipe.instructions ?
                                <div className='recipe-instructions  '>
                                    <ol>
                                        {recipe.instructions.map((item) => (
                                            <li>{item}</li>
                                        ))}
                                    </ol>
                                    {/*  <p>{recipe.instructions}</p> */}
                                </div>
                                : null}
                        </div>
                    </div>
                    <div className='recipe-notes-section'>
                        <div className='notes'>
                            <div className='recipe-notes-title'>
                                <h2>Notes</h2>
                            </div>
                            <div style={{ height: '300px' }}>
                                {recipe.attribution ?

                                    <p><b>Adapted from:</b><a href={recipe.attribution}>{recipe.attribution}</a></p>

                                    : null
                                }
                            </div>
                        </div>
                        {/* Tags, categories *       <p></p> */}
                        <div className='recipe-page-title-img' >
                            <img src={recipe.image} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
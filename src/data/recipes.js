//// Recipes 

//import CinnamonRolls from '../assets/CinnamonRolls.jpg';

import PumpkinPie from '../assets/PumpkinPie.jpg';
import pumpkinPi from '../assets/pumpkinPi.jpg';
import cinnRols from '../assets/cinnRols.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';

const recipeCollection = [
    {
        id: 0,
        title: 'Cinnamon Rolls',
        image: cinnRols,
        alt: 'Cinnamon rolls',
        attribution: '',
        category: 'bread',
        ingredients: [
            {
                ing: 1,
                name: 'All purpose flour',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 2,
                name: 'Bread flour',
                quantity: 2,
                unit: 'Cup'
            },
            {
                ing: 3,
                name: 'Salt',
                quantity: 1,
                unit: 'Teaspoon'
            },
            {
                ing: 4,
                name: 'Yeast',
                quantity: 1,
                unit: 'Package'
            },
            {
                ing: 5,
                name: 'Oat milk',
                quantity: 0.75,
                unit: 'Cup'
            },
            {
                ing: 6,
                name: 'Plant-based butter',
                quantity: 0.25,
                unit: 'Cup'
            },
            {
                ing: 7,
                name: 'Eggs',
                quantity: 1,
                unit: 'Plus 1 egg yolk',
                notes: ''
            },
            {
                ing: 8,
                name: 'Vanilla extract',
                quantity: 1,
                unit: 'Teaspoon',
                notes: ''
            },
            {
                ing: 9,
                name: 'Cane sugar',
                quantity: 0.33,
                unit: 'Cup',
                notes: ''
            },
            {
                ing: 10,
                name: 'Dark brown sugar',
                quantity: 0.66,
                unit: 'Cup',
                notes: ''
            },
            {
                ing: 11,
                name: 'Cinnamon',
                quantity: 1,
                unit: 'Tablespoon',
                notes: ''
            },
        ],
        instructions: [
            'Add package of yeast to warm milk, ~105-115°F and let activiate approximately 5min',
            'Once yeast actives - stir in melted butter, eggs, sugar. Add a dash of vanilla and/or orange extract.',
            'Add the flour mixture and give it a good knead.',
            'Allow dough to rise for 1-2 hrs',
            'Once dough is proofed, roll into 13x9 rectangle and spread soft butter followed by brown sugar and cinnamon mixture. ',
            'Roll into a log and cut into individual pieces (should get about 10',
            'Place into pan and allow for a second rise, about one hour.',
            'Heat oven to 350°F. Bake rolls for ~30 minutes or ubtil golden brown.'
        ]
    },
    {
        id: 1,
        title: 'Blueberry Muffins',
        image: bbMuffin,
        alt: 'Pumpkin pie',
        category: 'muffins',
        attribution: '',
        ingredients: [
            {
                ing: 1,
                name: 'All purpose flour',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 2,
                name: 'Cake four',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 3,
                name: 'Baking powder',
                quantity: 1,
                unit: 'Teaspoon'
            },
            {
                ing: 4,
                name: 'Baking soda',
                quantity: 0.25,
                unit: 'Teaspoon'
            },
            {
                ing: 5,
                name: 'Salt',
                quantity: 0.25,
                unit: 'Teaspoon'
            },
            {
                ing: 6,
                name: 'Vegetable oil',
                quantity: 0.25,
                unit: 'Cup'
            },
            {
                ing: 7,
                name: 'Applesauce',
                quantity: 0.25,
                unit: 'Cup'
            },
            {
                ing: 8,
                name: 'Cane sugar',
                quantity: 0.5,
                unit: 'Cup'
            },
            {
                ing: 9,
                name: 'Honey',
                quantity: 1,
                unit: 'Tablespoon'
            },
            {
                ing: 10,
                name: 'Eggs',
                quantity: 2,
                unit: '',
                //notes: '1 egg, plus 1 egg yolk.'
            },
            {
                ing: 11,
                name: 'Vanilla extract',
                quantity: 1,
                unit: 'Teaspoon'
            },
            {
                ing: 12,
                name: 'Orange extract',
                quantity: 0.25,
                unit: 'Teaspoon'
            },
            {
                ing: 13,
                name: 'Oat milk',
                quantity: 0.5,
                unit: 'Cup',
            },
            {
                ing: 14,
                name: 'Sour cream',
                quantity: 0.33,
                unit: 'Cup',
            },
            {
                ing: 15,
                name: 'Blueberries',
                quantity: 1,
                unit: 'Cup'
            },
            {
                ing: 16,
                name: 'Lemon zest',
                quantity: 0.5,
                unit: 'Tablespoon'
            },
        ],
        instructions: [
            'Preheat the oven to 450°F',
            'Combine flour, baking powder, baking soda, and salt in a bowl and whisk them together.',
            'In a separate bowl, beat plant-based butter, applesauce, and sugar until well combined. ',
            'Add eggs, vanilla, and honey, and continue beating.',
            'Using a wooden spoon or spatula, gently fold in the flour mixture. Avoid overmixing.',
            'Mix in milk and yogurt, and finally, fold in the blueberries.',
            'Bake at 450°F for 10 minutes. Then, reduce the temperature to 370°F and continue baking until done. Use a toothpick to check for doneness.'
        ]
    },
]

const recipeCategories = [
    {
        id: 0,
        category: 'muffins',
        image: cinnRols
    },
    {
        id: 1,
        category: 'pies',
        image: cinnRols
    }
]

const recipeCollectionNew = [
    {
        category: 'Muffins',
        catImage: bbMuffin,
        recipes: [
            {
                id: 1,
                title: 'Blueberry Muffins',
                image: bbMuffin,
                alt: 'Pumpkin pie',
                category: 'muffins',
                attribution: '',
                ingredients: [
                    {
                        ing: 1,
                        name: 'All purpose flour',
                        quantity: 1,
                        unit: 'Cup'
                    },
                    {
                        ing: 2,
                        name: 'Cake four',
                        quantity: 1,
                        unit: 'Cup'
                    },
                    {
                        ing: 3,
                        name: 'Baking powder',
                        quantity: 1,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 4,
                        name: 'Baking soda',
                        quantity: 0.25,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 5,
                        name: 'Salt',
                        quantity: 0.25,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 6,
                        name: 'Vegetable oil',
                        quantity: 0.25,
                        unit: 'Cup'
                    },
                    {
                        ing: 7,
                        name: 'Applesauce',
                        quantity: 0.25,
                        unit: 'Cup'
                    },
                    {
                        ing: 8,
                        name: 'Cane sugar',
                        quantity: 0.5,
                        unit: 'Cup'
                    },
                    {
                        ing: 9,
                        name: 'Honey',
                        quantity: 1,
                        unit: 'Tablespoon'
                    },
                    {
                        ing: 10,
                        name: 'Eggs',
                        quantity: 2,
                        unit: '',
                        //notes: '1 egg, plus 1 egg yolk.'
                    },
                    {
                        ing: 11,
                        name: 'Vanilla extract',
                        quantity: 1,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 12,
                        name: 'Orange extract',
                        quantity: 0.25,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 13,
                        name: 'Oat milk',
                        quantity: 0.5,
                        unit: 'Cup',
                    },
                    {
                        ing: 14,
                        name: 'Sour cream',
                        quantity: 0.33,
                        unit: 'Cup',
                    },
                    {
                        ing: 15,
                        name: 'Blueberries',
                        quantity: 1,
                        unit: 'Cup'
                    },
                    {
                        ing: 16,
                        name: 'Lemon zest',
                        quantity: 0.5,
                        unit: 'Tablespoon'
                    },
                ],
                instructions: [
                    'Preheat the oven to 450°F',
                    'Combine flour, baking powder, baking soda, and salt in a bowl and whisk them together.',
                    'In a separate bowl, beat plant-based butter, applesauce, and sugar until well combined. ',
                    'Add eggs, vanilla, and honey, and continue beating.',
                    'Using a wooden spoon or spatula, gently fold in the flour mixture. Avoid overmixing.',
                    'Mix in milk and yogurt, and finally, fold in the blueberries.',
                    'Bake at 450°F for 10 minutes. Then, reduce the temperature to 370°F and continue baking until done. Use a toothpick to check for doneness.'
                ]
            },
        ],
    },
    {
        category: 'Pies',
        catImage: pumpkinPi,
        recipes: [
            {
                id: 2,
                title: 'Pumpkin Pie',
                image: pumpkinPi,
                alt: 'Pumpkin pie',
                attribution: 'https://sallysbakingaddiction.com/the-great-pumpkin-pie-recipe/#tasty-recipes-74846',
                category: 'pies',
                ingredients: [
                    {
                        ing: 1,
                        name: 'Pumpkin',
                        quantity: 1,
                        unit: '15oz can'
                    },
                    {
                        ing: 2,
                        name: 'Eggs',
                        quantity: 3,
                        unit: ''
                    },
                    {
                        ing: 3,
                        name: 'Cane sugar',
                        quantity: 0.75,
                        unit: 'Cup'
                    },
                    {
                        ing: 4,
                        name: 'Dark brown sugar',
                        quantity: 0.5,
                        unit: 'Cup'
                    },
                    {
                        ing: 5,
                        name: 'Cornstarch',
                        quantity: 1,
                        unit: 'Tablespoon'
                    },
                    {
                        ing: 6,
                        name: 'Salt',
                        quantity: 0.5,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 6,
                        name: 'Half and Half',
                        quantity: 0.25,
                        unit: 'Cup'
                    },
                    {
                        ing: 7,
                        name: 'Heavy cream',
                        quantity: 1,
                        unit: 'Cup'
                    },
                    {
                        ing: 8,
                        name: 'Cinnamon',
                        quantity: 2,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 9,
                        name: 'Ginger',
                        quantity: 0.5,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 10,
                        name: 'Nutmeg',
                        quantity: 0.25,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 11,
                        name: 'Cloves',
                        quantity: 0.25,
                        unit: 'Teaspoon'
                    },
                ],
            },
        ],
    },
    {
        category: 'Sweet Breads',
        catImage: cinnRols,
        recipes: [
            {
                id: 3,
                title: 'Cinnamon Rolls',
                image: cinnRols,
                alt: 'Cinnamon rolls',
                attribution: '',
                category: 'bread',
                ingredients: [
                    {
                        ing: 1,
                        name: 'All purpose flour',
                        quantity: 1,
                        unit: 'Cup'
                    },
                    {
                        ing: 2,
                        name: 'Bread flour',
                        quantity: 2,
                        unit: 'Cup'
                    },
                    {
                        ing: 3,
                        name: 'Salt',
                        quantity: 1,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 4,
                        name: 'Yeast',
                        quantity: 1,
                        unit: 'Package'
                    },
                    {
                        ing: 5,
                        name: 'Oat milk',
                        quantity: 0.75,
                        unit: 'Cup'
                    },
                    {
                        ing: 6,
                        name: 'Plant-based butter',
                        quantity: 0.25,
                        unit: 'Cup'
                    },
                    {
                        ing: 7,
                        name: 'Eggs',
                        quantity: 1,
                        unit: 'Plus 1 egg yolk',
                        notes: ''
                    },
                    {
                        ing: 8,
                        name: 'Vanilla extract',
                        quantity: 1,
                        unit: 'Teaspoon',
                        notes: ''
                    },
                    {
                        ing: 9,
                        name: 'Cane sugar',
                        quantity: 0.33,
                        unit: 'Cup',
                        notes: ''
                    },
                    {
                        ing: 10,
                        name: 'Dark brown sugar',
                        quantity: 0.66,
                        unit: 'Cup',
                        notes: ''
                    },
                    {
                        ing: 11,
                        name: 'Cinnamon',
                        quantity: 1,
                        unit: 'Tablespoon',
                        notes: ''
                    },
                ],
                instructions: [
                    'Add package of yeast to warm milk, ~105-115°F and let activiate approximately 5min',
                    'Once yeast actives - stir in melted butter, eggs, sugar. Add a dash of vanilla and/or orange extract.',
                    'Add the flour mixture and give it a good knead.',
                    'Allow dough to rise for 1-2 hrs',
                    'Once dough is proofed, roll into 13x9 rectangle and spread soft butter followed by brown sugar and cinnamon mixture. ',
                    'Roll into a log and cut into individual pieces (should get about 10',
                    'Place into pan and allow for a second rise, about one hour.',
                    'Heat oven to 350°F. Bake rolls for ~30 minutes or ubtil golden brown.'
                ]
            },

        ]
    }

]

export { recipeCollection, recipeCategories, recipeCollectionNew };
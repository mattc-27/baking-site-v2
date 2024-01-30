//// Recipes 

import pumpkin_pie from '../assets/pumpkin_pie.png';
import cinnamon_rolls from '../assets/cinnamon_rolls.png';
import blueberry_muffins from '../assets/blueberry_muffins.png';
import cherry_bars from '../assets/cherry_bars.png';

const recipeCollection = [
    {
        category: 'Muffins',
        catImage: blueberry_muffins,
        recipes: [
            {
                id: 1,
                title: 'Blueberry Muffins',
                image: blueberry_muffins,
                alt: 'Blueberry muffins',
                category: 'muffins',
                attribution: '',
                name: 'blueberry_muffins',
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
        catImage: pumpkin_pie,
        recipes: [
            {
                id: 2,
                title: 'Pumpkin Pie',
                image: pumpkin_pie,
                alt: 'Pumpkin pie',
                attribution: 'https://sallysbakingaddiction.com/the-great-pumpkin-pie-recipe/#tasty-recipes-74846',
                category: 'pies',
                name: 'pumpkin_pie',
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
        catImage: cinnamon_rolls,
        recipes: [
            {
                id: 3,
                title: 'Cinnamon Rolls',
                image: cinnamon_rolls,
                alt: 'Cinnamon rolls',
                attribution: '',
                category: 'sweet_breads',
                name: 'cinnamon_rolls',
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
                    'Heat oven to 350°F. Bake rolls for ~30 minutes or until golden brown.'
                ]
            },
        ]
    },
    {
        category: 'Cookies and Bars',
        catImage: cherry_bars,
        recipes: [
            {
                id: 3,
                title: 'Cherry Apple Bars',
                image: cherry_bars,
                alt: 'Cherry Apple Bars',
                attribution: '',
                category: 'cookies_bars',
                name: 'cherry_bars',
                ingredients: [
                    {
                        ing: 1,
                        name: 'All purpose flour',
                        quantity: 1.25,
                        unit: 'Cup'
                    },
                    {
                        ing: 2,
                        name: 'Oats',
                        quantity: 0.5,
                        unit: 'Cup'
                    },
                    {
                        ing: 3,
                        name: 'Salt',
                        quantity: 0.25,
                        unit: 'Teaspoon'
                    },
                    {
                        ing: 4,
                        name: 'Cane sugar',
                        quantity: 0.5,
                        unit: 'Cup'
                    },
                    {
                        ing: 5,
                        name: 'Plant-based butter',
                        quantity: 0.5,
                        unit: 'Cup'
                    },
                    {
                        ing: 6,
                        name: 'Almonds',
                        quantity: 0.25,
                        unit: 'Cup'
                    },
                    {
                        ing: 7,
                        name: 'Almond extract',
                        quantity: 0.25,
                        unit: 'Teaspoon',
                        notes: ''
                    },
                    {
                        ing: 8,
                        name: 'Eggs',
                        quantity: 1,
                        unit: '',
                        notes: ''
                    },
                    {
                        ing: 9,
                        name: 'Cherries',
                        quantity: 2,
                        unit: 'Cup',
                        notes: ''
                    },
                    {
                        ing: 10,
                        name: 'Cane sugar',
                        quantity: 2,
                        unit: 'Tablespoon',
                        notes: ''
                    },
                    {
                        ing: 11,
                        name: 'Flour',
                        quantity: 1,
                        unit: 'Tablespoon',
                        notes: ''
                    },
                    {
                        ing: 12,
                        name: 'Cornstarch',
                        quantity: 1,
                        unit: 'Tablespoon',
                        notes: ''
                    },
                    {
                        ing: 13,
                        name: 'Almond extract',
                        quantity: 0.5,
                        unit: 'Teaspoon',
                        notes: ''
                    },
                    {
                        ing: 14,
                        name: 'Lemon juice',
                        quantity: 2,
                        unit: 'Tablespoon',
                        notes: ''
                    },
                ],
                instructions: [
                    'In a bowl, mix together flour, oats, sugar, and salt.',
                    'Cut in 1 stick of butter.',
                    'Add almonds and almond extract.',
                    'Stir in 1 egg.',
                    'Add the flour mixture and give it a good knead.',
                    'Combine cherries, sugar, flour, cornstarch, almond extract, and lemon juice in a separate bowl.',
                    'Mix together flour and oats.',
                    'Cut in ¾ cups of butter.',
                    'Reserve 1.5 - 2 cups for topping.',
                    'Press the remaining mixture into a 9x13in pan.',
                    'Pre-bake the crust in the oven.',
                    'Boil the filling mixture for 2 minutes while stirring.',
                    'Bake the pre-baked crust at 375°F for 25 minutes.',
                    'Pour the boiled filling over the crust.',
                    'Sprinkle the reserved topping over the filling.',
                    'Continue baking at 350°F for 30-35 minutes.',
                    'Allow the bars to cool before cutting into squares.',
                    'Serve and enjoy!'
                ]
            },
        ]
    }
]

export { recipeCollection };
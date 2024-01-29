//
import PumpkinPie from '../assets/PumpkinPie.jpg';
import pumpkinPi from '../assets/pumpkinPi.jpg';
import cinnRols from '../assets/cinnRols.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';

const RecipesAll = [
    {
        category: 'muffins',
        recipes: [
            {
                id: 1,
                title: 'Blueberry Muffins',
                image: bbMuffin,
                alt: 'Blueberry Muffins',
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
            {
                id: 2,
                title: 'Muffins B',
            },
        ]
    },
    {
        category: 'pies',
        recipes: [
            {
                id: 3,
                title: 'Pumpkin pie',
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
            {
                id: 4,
                title: 'Pie B',
            },
        ]
    }
]

export { RecipesAll }
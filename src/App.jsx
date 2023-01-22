import React from 'react';
import RecipeTitle from './RecipeTitle'
import Ingredients from './Ingredients';
import Directions from './Directions';

function App() {
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
            <Ingredients />
            <Directions />
        </article>
    )
}



export default App;

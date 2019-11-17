import React from 'react';
import '../App.css';
import RecipeItem from './recipeItem';

class Recipes extends React.Component{

    render() {
        return this.props.myRecipes.map ((recipe)=>
        {
            console.log({recipe});
            return <RecipeItem key={recipe.Picture} recipe={recipe}></RecipeItem>
        });
    }
}
export default Recipes;
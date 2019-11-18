import React from 'react';
import '../App.css';
import RecipeItem from './recipeItem';

class Recipes extends React.Component{

    render() {
        //was a problem with this line
        return this.props.myRecipes.map ((recipe)=>
        {
            //console.log({recipe});
            //changed key={recipe.Picture}
            return <RecipeItem key={recipe._id} recipe={recipe}></RecipeItem>
        });
    }
}
export default Recipes;
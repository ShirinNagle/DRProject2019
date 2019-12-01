import React from 'react';
import '../App.css';
import RecipeItem from './recipeItem';

class Recipes extends React.Component{

    render() {
        
        return this.props.myRecipes.map ((recipe)=>
        {
            
            return <RecipeItem key={recipe._id} recipe={recipe}
            ReloadDataMethod={this.props.ReloadDataMethod}></RecipeItem>
            
        });

    }
}
export default Recipes;
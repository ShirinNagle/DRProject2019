import React from 'react';
import '../App.css';
import Recipes from'./recipes';
import axios from 'axios';

class Read extends React.Component{
 
    state = {
        recipes: []
    };

    componentDidMount(){
        axios.get(
        "http://localhost:4000/api/recipes")
        .then((response) =>{
            this.setState({recipes: response.data})//.Search
        })
        .catch((error)=> {
            console.log(error);
        });
    }

render() {
    return(
        <div className="App">
        <h1>Recipe Store</h1>
        <Recipes myRecipes={this.state.recipes}></Recipes>
        </div>
    );
  }
}
export default Read;
import React from 'react';
import '../App.css';
import Recipes from'./recipes';
import axios from 'axios';

class Read extends React.Component{
    constructor(){//new30/11
        super();//new30/11
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);//new30/11
    }//new30/11
 
    state = {
        recipes: []
    };

    componentDidMount(){
        axios.get("http://localhost:4000/api/recipes")
        .then((response) =>{
            this.setState({recipes: response.data.recipes})//.Search
        })
        .catch((error)=> {
            console.log(error);
        });
    }
    ReloadDataMethod(){//new30/11
        axios.get("http://localhost:4000/api/recipes")//new30/11
        .then((response)=>{//new30/11
            this.setState({recipes: response.data.recipes})//new30/11
        })//new30/11
        .catch((error)=>{//new30/11
            console.log(error);//new30/11
        });//new30/11
    }

render() {
    return(
        <div className="App">
        <h1>Recipe Store</h1>
    
        <Recipes myRecipes={this.state.recipes} ReloadDataMethod={this.ReloadDataMethod}></Recipes>
        </div>
    );
  }
}
export default Read;
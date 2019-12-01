import React from 'react';
import axios from 'axios';


class Create extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            RecipeName: '',
            RecipeCategory: '',
            Picture: '',
            Website: ''
        };

        this.handleChangeRecipeName = this.handleChangeRecipeName.bind(this);
        this.handleChangeRecipeCategory = this.handleChangeRecipeCategory.bind(this);
        this.handleChangeRecipePicture = this.handleChangeRecipePicture.bind(this);
        this.handleChangeRecipeWebsite = this.handleChangeRecipeWebsite.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    handleChangeRecipeName(e){
        this.setState({ RecipeName: e.target.value});
    }
    handleChangeRecipeCategory(e){
        this.setState({RecipeCategory: e.target.value});
    }
    handleChangeRecipePicture(e){
       // this.setState({Picture:true}) look into further
        this.setState({Picture: e.target.value});
    }
    handleChangeRecipeWebsite(e){
        // this.setState({Picture:true}) look into further
         this.setState({Website: e.target.value});
     }
       

    handleSubmit(e){
        e.preventDefault();
        console.log('button clicked');
       alert("A recipe record was submitted: " + this.state.RecipeName +"  " + this.state.RecipeCategory
        + "  "+ this.state.Picture + " "+ this.state.Website);
        //const newRecipe in edit.js
        const recipeObject ={
            recipename:this.state.RecipeName,
            recipecategory:this.state.RecipeCategory,
            picture:this.state.Picture,
            website:this.state.Website
           
        }
        axios.post('http://localhost:4000/api/recipes', recipeObject)
        .then(res => console.log(res.data))
        .catch();
        
        this.setState({RecipeName:'', RecipeCategory:'', Picture:'', Website:''});
    }
    render(){
        return(
            <div>
                <h1>Add A Recipe</h1>
                <form onSubmit={this.handleSubmit}>

                 <div className='form-group'>
                    <label >Add Recipe Name</label>
                    <input
                    type='text'
                    className='form-control'
                    value={this.state.RecipeName}
                    onChange={this.handleChangeRecipeName}
                    ></input>
                    </div>

                    <div className='form-group'>
                    <label>Add Recipe Category</label>
                    <input
                    type='text'
                    className='form-control'
                    value={this.state.RecipeCategory}
                    onChange={this.handleChangeRecipeCategory}
                    ></input>
                    </div>

                    <div className='form-group'>
                    <label>Add Picture Url</label>
                    <textarea
                    row='3'
                    className='form-control'
                    value={this.state.Picture}
                    onChange={this.handleChangeRecipePicture}
                    ></textarea>
                    </div>
                    
                    <div className='form-group'>
                    <label>Add Website Url</label>
                    <textarea
                    row='3'
                    className='form-control'
                    value={this.state.Website}
                    onChange={this.handleChangeRecipeWebsite}
                    ></textarea>
                    </div>
                    
                    <div>
                      
                    </div>

                    <div className='form-group'>
                    <input type="submit" value="Submit"/>
                    </div>
                    
                </form>
                
            </div>
        );
    }
}
export default Create;
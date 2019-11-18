import React from 'react';
import axios from 'axios';

class Create extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            RecipeName: '',
            RecipeCategory: '',
            Picture: '',
            Ingredients: '',
            Method: '',
            Images: ''
        };

        this.handleChangeRecipeRecipeName = this.handleChangeRecipeRecipeName.bind(this);
        this.handleChangeRecipeRecipeCategory = this.handleChangeRecipeRecipeCategory.bind(this);
        this.handleChangeRecipePicture = this.handleChangeRecipePicture.bind(this);
        this.handleChangeRecipeIngredients = this.handleChangeRecipeIngredients.bind(this);
        this.handleChangeRecipeMethod = this.handleChangeRecipeMethod.bind(this);
        this.handleChangeRecipeImages = this.handleChangeRecipeImages.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    handleChangeRecipeRecipeName(e){
        this.setState({ RecipeName: e.target.value});
    }
    handleChangeRecipeRecipeCategory(e){
        this.setState({RecipeCategory: e.target.value});
    }
    handleChangeRecipePicture(e){
        this.setState({Picture: e.target.value});
    }
    handleChangeRecipeIngredients(e){
        this.setState({Ingredients: e.target.value});
    }
    handleChangeRecipeMethod(e){
        this.setState({Method:e.target.value});
    }
    handleChangeRecipeImages(e){
        this.setState({Images:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('button clicked');
       alert("A recipe record was submitted: " + this.state.RecipeName +"  " + this.state.RecipeCategory
        + "  "+ this.state.Picture + " "+ this.state.Ingredients + " "+ this.state.Method + " "+ this.state.Images);
        //const newRecipe in edit.js
        const recipeObject ={
            recipename:this.state.RecipeName,
            recipecategory:this.state.RecipeCategory,
            picture:this.state.Picture,
            ingredients:this.state.Ingredients,
            method:this.state.Method,
            images:this.state.Images
        }
        axios.post('http://localhost:4000/api/recipes', recipeObject)
        .then(res => console.log(res.data))
        .catch();
        //not included in the solution for express lab
        //this.setState({RecipeName:'', RecipeCategory:'', Picture:'', Ingredients:'', Method:'', Images:''});
    }
    render(){
        return(
            <div>
                <h1>Add A Recipe</h1>
                <form onSubmit={this.handleSubmit}>

                 <div className='form-group'>
                    <label style={{color:"white"}}>Add Recipe Name</label>
                    <input
                    type='text'
                    className='form-control'
                    value={this.state.RecipeName}
                    onChange={this.handleChangeRecipeRecipeName}
                    ></input>
                    </div>

                    <div className='form-group'>
                    <label>Add Recipe Category</label>
                    <input
                    type='text'
                    className='form-control'
                    value={this.state.RecipeCategory}
                    onChange={this.handleChangeRecipeRecipeCategory}
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
                        <label>Add Ingredients</label>
                        <textarea
                        row='6'
                        className='form-control'
                        value={this.state.Ingredients}
                        onChange={this.handleChangeRecipeIngredients}
                        ></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Add Method</label>
                        <textarea
                        row='6'
                        className='form-control'
                        value={this.state.Method}
                        onChange={this.handleChangeRecipeMethod}
                        ></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Upload Image</label>
                        <textarea
                        row='6'
                        className='form-control'
                        value={this.state.Images}
                        onChange={this.handleChangeRecipeImages}
                        ></textarea>
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
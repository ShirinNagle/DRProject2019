import React from 'react';
import axios from 'axios';


class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            RecipeName: '',
            RecipeCategory: '',
            Picture: '',
            Website: '',
            _id:''
        };
        this.handleChangeRecipeName = this.handleChangeRecipeName.bind(this);
        this.handleChangeRecipeCategory = this.handleChangeRecipeCategory.bind(this);
        this.handleChangeRecipePicture = this.handleChangeRecipePicture.bind(this);
        this.handleChangeRecipeWebsite = this.handleChangeRecipeWebsite.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }//constructor

    componentDidMount(){
        alert(this.props.match.params.id);

        axios.get('http://localhost:4000/api/recipes/'+ this.props.match.params.id)
        .then((response )=> {
            this.setState({
              _id:response.data._id,
              RecipeName: response.data.recipename,
              RecipeCategory: response.data.recipecategory,
              Picture: response.data.picture,
              Website: response.data.website
              //more to be inputted, when I'm clearer about what is happening here
            })
        })
        .catch();
    }

    handleChangeRecipeName(e){
        this.setState({RecipeName: e.target.value});
    }
    handleChangeRecipeCategory(e){
        this.setState({RecipeCategory: e.target.value});
    }
    handleChangeRecipePicture(e){
        this.setState({Picture: e.target.value});
    }

    handleChangeRecipeWebsite(e){
        this.setState({Website: e.target.value});
    }

   

    

    handleSubmit(e){
        e.preventDefault();
       
       alert("A recipe record was Edited: Recipe Name" + this.state.RecipeName +" Category:  " + this.state.RecipeCategory
        + " Picture:  "+ this.state.Picture + " Website: "+ this.state.Website);// + " "+ this.state.Ingredients + " "+ this.state.Method + " "+ this.state.Images);

        const newRecipe ={

            recipename:this.state.RecipeName,
            recipecategory:this.state.RecipeCategory,
            picture:this.state.Picture,
            website: this.state.Website
        };
        axios.put('http://localhost:4000/api/recipes/'+ this.state._id, newRecipe)
        .then()
        .catch();

        /*this.setState({RecipeName:'',
                        RecipeCategory: '',
                        Picture: '',
                    _id:''});*/
    }
    render(){
        return(
        
                <div>
                    <h1>Edit Component</h1>
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
                        
                        
                        
    
                        <div className='form-group'>
                        <input type="submit" value="Submit"/>
                        </div>
                        
    
                    </form>
                </div>
            
        )
    }

}//
export default Edit;
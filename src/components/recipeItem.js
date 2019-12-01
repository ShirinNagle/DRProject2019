import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import {Link} from 'react-router-dom';

class RecipeItem extends React.Component{
    // Read is not fully working yet
    constructor(){
        super();
        this.DeleteRecipe = this.DeleteRecipe.bind(this);
        this.SearchRecipe = this.SearchRecipe.bind(this);
        this.ShowRecipe = this.ShowRecipe.bind(this);
    }
    DeleteRecipe(e){
        console.log("Delete Clicked");
        e.preventDefault();
        axios.delete('http://localhost:4000/api/recipes/' + this.props.recipe._id)
        .then(()=>{
            this.props.ReloadDataMethod();
        })
        .catch();
        
    }
    //code to find rexipe
    SearchRecipe(e){
        console.log("Searching for a recipe")
        e.preventDefault();
        axios.get('http://localhost:4000/api/recipes/' + this.props.recipe._id)
        .then(()=>{
            //this.props.ReloadDataMethod();
        })
        .catch();
        
    }
    // code to get recipe item to display
    ShowRecipe(e){
        console.log("Displaying Recipe")
        e.preventDefault();
        axios.get('http://localhost:4000/api/recipes/' + this.props.recipe._id)
        .then(()=>{
            this.props.ReloadDataMethod();
            
        })
    }
    
   
    render(){
        return (
            <div align="center">
             

             <Card bg="light" text="secondary" border="light" style={{width: '28rem'}}>
            <Card.Header variant="outline-warning">{this.props.recipe.recipecategory}</Card.Header>
              <Card.Body>
                  <blockquote className="blockquote mb-0">
                      <img src={this.props.recipe.picture} width="100%" height="100%" alt="recipePic"/>
                                           
                      <footer>
                          {this.props.recipe.recipename}
                      </footer>
                  </blockquote>
              </Card.Body>
              <Button variant="btn btn-outline-warning" onClick={this.DeleteRecipe}>Delete</Button>
              <Link to={"/edit/" + this.props.recipe._id} className="btn btn-outline-secondary">Edit</Link>
              {/*Want to be able to click on a view button to bring you straight to the recipe website - need to look at a later date 
              <Link to={"/view/" + this.props.recipe._id} className="btn btn-outline-secondary">View</Link>*/}
             {/*<Link to={this.props.recipe.website} className="btn btn-outline-secondary">View</Link>{/*This link appends the website address to the local host but doesn't open a new window */}
             {/*<Link to ={window.location.replace(this.props.recipe.website)} className="btn btn-outline-secondary">View</Link> this link brings me to the last website added */}
             <Link to={this.props.recipe.website} className="btn btn-outline-secondary">View</Link>
             </Card>
            </div>
        );
    }
}
export default RecipeItem;
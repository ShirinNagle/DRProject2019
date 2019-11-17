import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {Link} from 'react-router-dom'

class RecipeItem extends React.Component{
    //below commented out as Read is not fully working yet
    constructor(){
        super();
        this.DeleteRecipe = this.DeleteRecipe.bind(this);
    }
    DeleteRecipe(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/api/recipes/' + this.props.recipe._id)
        .then()
        .catch();
        
    }
    
   
    render(){
        return (
            <div>
              {/*<h4>{this.props.recipe.RecipeName}</h4>
             <p>{this.props.recipe.Category}</p>
             <img src={this.props.recipe.Picture}/>*/}

             <Card border="primary" style={{width: '28rem'}}>
            <Card.Header>{this.props.recipe.RecipeCategory}</Card.Header>
              <Card.Body>
                  <blockquote className="blockquote mb-0">
                      <img src={this.props.recipe.Picture} width="250" height="200" alt="recipePic"/>
                      <footer>
                          {this.props.recipe.RecipeName}
                      </footer>
                  </blockquote>
              </Card.Body>
              <Button variant="danger" onClick={this.DeleteRecipe}>Delete</Button>
              <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
             </Card>
            </div>
        );
    }
}
export default RecipeItem;
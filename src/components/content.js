import React from 'react';
import '../App.css';

//Going over how client side of the app works 
class Content extends React.Component {
    render() 
    {
        return( 
        
        <div className="App">
            <br></br>
            <br></br>
        <h1> Welcome to your own personal Recipe Storage!</h1>
        <h3>To begin using your Recipe Storage app click on Add Recipe on the Navigation Bar</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>    
        <h6>The current local time is {new Date().toLocaleTimeString()}.</h6>
          
        </div>
        
        );
    }
}

export default Content;
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
        <h1> Hello from Recipe Store!</h1>
        <br></br>
        <br></br>
        <h2>The current local time is {new Date().toLocaleTimeString()}.</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>      
        </div>
        );
    }
}

export default Content;
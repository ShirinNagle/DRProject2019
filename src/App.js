import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
//import Search from './components/search';
//import View from './components/view';

class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App" >
      <Navbar style={{backgroundColor: 'lightgray'}}variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">Stored Recipes</Nav.Link>
          <Nav.Link href="/create">Add Recipe</Nav.Link>
          {/*This link works as a link to a page but isn't coded properly to navigate to an external page 
          <Nav.Link href="/view">View Recipe</Nav.Link>*/}
        
        </Nav>
      </Navbar>
      <br />
      <Switch>
        <Route exact path="/" component={Content}/>
        <Route path="/create" component={Create}/>
        <Route path="/read" component={Read}/>
        <Route path="/edit/:id" component={Edit}/>
        {/*<Route path="/view/" component={View}/>at a later date I would like to put in a link to view recipe website*/}
          {/*from Stack overflow the code would be something like but doesn't bring me to an external window just appends the website to the path view*/}
         
        
    
     </Switch>
      
    </div>
    </Router>
  );
}
}
ReactDom.render(<App/>, document.getElementById('root'));
export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App" style={{backgroundColor:'lightgreen'}}>
      <Navbar style={{backgroundColor: 'lightskyblue'}}variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">Data</Nav.Link>
          <Nav.Link href="/create">Add Recipe</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Switch>
        <Route exact path="/" component={Content}/>
        <Route path="/create" component={Create}/>
        <Route path="/read" component={Read}/>
        <Route path="/edit/:id" component={Edit}/>
      </Switch>
      
    </div>
    </Router>
  );
}
}
export default App;

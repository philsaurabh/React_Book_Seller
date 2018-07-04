import React from 'react';
import Router from './Router';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem,Image,Button} from 'react-bootstrap';
import AddCart from './features/product-listing/add-cart';


import './App.css';

const Navigation=(props)=>
  <Navbar>
    <Navbar.Brand>
    <a href='/'><span>  <Image height={50} width={50} src="./products/1.png"/> Book Seller <Image height={50} width={50} src="./products/1.png"/></span></a>
    </Navbar.Brand> 
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem componentClass='span'> <NavLink to='/'><Button bsStyle="warning">Home</Button></NavLink></NavItem>
        <NavItem componentClass='span'><NavLink to='/cart'><AddCart/></NavLink></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
class App extends React.Component {
   render() {
      return (
         <div className='container'>
            <Navigation/>
            <Router/>
         </div>
      );
   }
}
export default App;

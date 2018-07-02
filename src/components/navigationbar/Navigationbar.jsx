import React,{Component} from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';

class Navigationbar extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">TERRIFIC MINDS.</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    {this.props.navigation.map((data, idx)  => (
      <NavItem eventKey={1} href="#">
      {data.option}
      </NavItem>
    ))}

    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
export default Navigationbar;

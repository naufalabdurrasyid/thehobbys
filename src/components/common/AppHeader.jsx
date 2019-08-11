import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
   } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
  
    };
 

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
     
  render() {
    return (
      <div className='colornav'>
        <Navbar light expand="md">
            <Container >
          <NavbarBrand ><Link style={{textDecoration:'none', color:'black'}} to='/'className="text-white"><img height='100px' src='https://res.cloudinary.com/dcnhkq6qt/image/upload/v1565080148/791c0286-2a28-47e6-82dd-1e10f76bf456_200x200_qnxxg1.png' alt=''/></Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink ><Link style={{textDecoration:'none', color:'black'}}to='/tentang' >Tentang Kami</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink ><Link style={{textDecoration:'none', color:'black'}} to='/layanan' >Layanan dan Harga</Link></NavLink>
              </NavItem>
            
             
            </Nav>
          </Collapse>
          </Container >
        </Navbar>
      </div>
    );
  }
}
export default withRouter (AppHeader)
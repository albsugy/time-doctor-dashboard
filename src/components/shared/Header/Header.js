import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from "./../../../images/logo.jpg";
import right_menu_img from "./../../../images/righr-menu.png";

class Header extends Component {
  render() {
    return (
      <header>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Navbar collapseOnSelect>
             <Navbar.Header>
               <Navbar.Brand>
                 <a href="#dfsd"><img src={logo} alt="Time Doctor" /></a>
               </Navbar.Brand>
               <Navbar.Toggle />
             </Navbar.Header>
             <Navbar.Collapse>
               <Nav>
                 <NavDropdown eventKey={3} title="Dashboard" id="dashboard-dropdown" active={true}>
                   <MenuItem eventKey={3.1}>First Payment</MenuItem>
                   <MenuItem eventKey={3.2}>Second Payment</MenuItem>
                 </NavDropdown>
                 <NavItem eventKey={2} href="#">Edit Time</NavItem>
                 <NavItem eventKey={3} href="#">Screenshots</NavItem>
                 <NavDropdown eventKey={3} title="Reports" id="reports-dropdown">
                   <MenuItem eventKey={3.1}>First Report</MenuItem>
                   <MenuItem eventKey={3.2}>Second Report</MenuItem>
                   <MenuItem divider />
                   <MenuItem eventKey={3.4}>New Report</MenuItem>
                 </NavDropdown>
                 <NavDropdown eventKey={3} title="Payments" id="payments-dropdown">
                   <MenuItem eventKey={3.1}>First Payment</MenuItem>
                   <MenuItem eventKey={3.2}>Second Payment</MenuItem>
                 </NavDropdown>
               </Nav>
               <img className="right_menu_img" src={right_menu_img} alt="right_menu_img" />
             </Navbar.Collapse>
           </Navbar>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;

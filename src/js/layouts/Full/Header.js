/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  Nav, NavbarBrand, Navbar, NavItem, Button
} from 'reactstrap';

import Bitmaps from '../../theme/Bitmaps';

class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <Nav className="navigation-bar">
          <NavbarBrand className="navbar-logo" tag={NavLink} to="/">
            <img src={Bitmaps.logo} alt="brand-logo" />
          </NavbarBrand>
          <div className="main-menu">
            <Nav>
              <Navbar>
                <NavItem>
                  <NavLink smooth className="nav-link" to="/#different">
                    What's different
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink smooth className="nav-link" to="/#additional">
                    Additional features
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink smooth className="nav-link" to="/#compare">
                    How we compare
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
              </Navbar>
            </Nav>
          </div>
          <div className="navbar-quote d-none d-lg-block">
            <Button
              className="btn"
              color="info"
              tag={NavLink}
              smooth
              to="/#contact"
            >
              Get in Touch
            </Button>
          </div>
        </Nav>
      </div>
    );
  }
}

export default Header;

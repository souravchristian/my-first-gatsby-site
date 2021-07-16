import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

const Layout = ({ pageTitle, children }) => {
  return (
          <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                  <Link to="/carousel" className="nav-link">
                  Carousel
                  </Link>
                  <Link to="/signup" className="nav-link">
                  Signup
                  </Link>
                  <Link to="/login" className="nav-link">
                  Login
                  </Link>
                  <Link to="/hook" className="nav-link">
                  Hook
                  </Link>
                </Nav>
          </Navbar>
          
  )
}

export default Layout
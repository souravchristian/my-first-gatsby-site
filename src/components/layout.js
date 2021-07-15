import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
                </Nav>
          </Navbar>
          
  )
}

export default Layout
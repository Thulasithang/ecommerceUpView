import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Navbar, NavDropdown, icons } from "react-bootstrap"

function Header(props) {
  return (
    <div>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                        src = {props.logo}
                        width = "100%"
                        height = "30"
                        className = "d-inline-block align-top"
                        alt = "React Bootstrap logo"
                    />    
                </Navbar.Brand>
                <span className = "bi bi-cart"></span>
                <NavDropdown title ="Cart" id= "basic-nav-dropdown">
                    //details to be added
                </NavDropdown>
            </Container>

        </Navbar>
    </div>
  )
}

export default Header
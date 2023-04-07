import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, Navbar, NavDropdown, icons } from "react-bootstrap"

function Header(props) {
  return (
    <div>
        <Navbar bg="light" >
            <Container style = {{maxWidth: "80vw"}}>
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

// return (
//     <Navbar bg="light" expand="lg">
//       <Container className = "container" style = {{maxWidth: "90vw"}}>
//         <Navbar.Brand href="#home"><img 
//                         src = {props.logo}
//                         width = "100%"
//                         height = "30"
//                         className = "d-inline-block align-top"
//                         alt = "React Bootstrap logo"
//                     />    </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
}

export default Header
import React, { useEffect, useState } from "react"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Main from "./components/Main"
import { Button, Card, CardGroup, Container, Row, Col  } from "react-bootstrap"


const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    
    <div>
      {users && users.ecommerce && (
        <div>
            <Header {...users.ecommerce} />
        </div>
      )} 
      <Container className = "container" style ={{maxWidth: "80vw"}}>
      <Row xs={1} md={1} className="g-6">
            {Array.from({ length:1 }).map((_, idx) => (
              <Col>
      {users.ecommerce && users.ecommerce.products && (
        <CardGroup className = "cardgroup">
          
                {
                  users.ecommerce.products.map(user => (
                    <Cards {...user} />
                  ))
                }
        </CardGroup>
      )}
      </Col>
          ))}
        </Row>
        </Container>
    </div>
  );
}

export default App;
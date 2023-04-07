import React, { useEffect, useState } from "react"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Main from "./components/Main"

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
      {/* <Header 
        img ={headerLogo}
        name ={headerName} /> */}
      {/* {users && users.ecommerce && (
        <div>
          {
            users.ecommerce.map(user => (
              <Header {...user} />
            ))
          }
        </div>
      )} */}
      {users.ecommerce && users.ecommerce.products && (
        <div>
          {
            users.ecommerce.products.map(user => (
              <Cards {...user} />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default App;
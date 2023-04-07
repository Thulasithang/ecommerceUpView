// import React, { useState, useEffect } from "react"
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import Cards from "./components/Cards"
// // import data from "https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db"
// import { Button } from "react-bootstrap"

// export default function App() {
  
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db")
//       .then(response => response.json())
//       .then(data => setData(Array.from (data)));
//   }, []);      
  
//           // <Hero />
//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>
//           <h2>{item.products.name}</h2>
//           <p>{item.description}</p>
//           <img src={item.image} alt={item.title} />
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react"

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

  // console.log(users)

  return (
    <div>
      {users.ecommerce && users.ecommerce.products && (
        <div>
          {
            users.ecommerce.products.map(user => (
              <Cards{...user} />
            ))
          }
        </div>
      )}
    </div>
  );
  // return (
  //   <div>
  //     <Cards />
  //     {users.ecommerce.products && (
        
  //       <ul>
  //         {users.ecommerce.products.map(user => (
  //           <li key={user.id}>{user.name}</li>
  //         ))}
  //       </ul>
        
  //     )}
  //   </div>
  // );
}

export default App;
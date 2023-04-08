import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        Home
        <Link to="/singleproduct">
        <button>about</button>
        </Link>
    </div>

  )
}

export default Home
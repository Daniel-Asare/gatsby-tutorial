import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/blog">About</Link>
        </li>
        <li>
         <Link to="/product">Product</Link>
        </li>
        <li>
         <Link to="/examples">Examples</Link>
        </li>
        <li>
         <Link to="/images">Images</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

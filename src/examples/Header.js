import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
const getData = graphql`
   {
    site {
      info:siteMetadata {
        title
        author
        data
        description
        person {
          age
          name
        }
      }
    }
  }`
  

const Header = () => {
  const {site:{info:{person:{name},title}}} = useStaticQuery(getData)
 
  return (
    <div>
      <h1>title : {title}</h1>
      <h1>name : {name} </h1>
    </div>
  )
}


export default Header

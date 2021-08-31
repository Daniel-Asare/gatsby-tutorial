import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import '../components/products.css'
import {Link} from 'gatsby'

const Product = ({ data }) => {
  const {allContentfulProduct:{nodes:products}} = data
  console.log(products);
  return(
    <Layout>
      <section className= 'page'>
        {products.map((product)=>{
          const {title,id,image,price,slug} = product
          return <article key={id}>
           <Image fluid={image.fluid} alt={title}/>
           <h3>{title} <span>${price}</span> </h3>
          <Link to={`/product/${slug}`}>more details</Link>
          </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Product

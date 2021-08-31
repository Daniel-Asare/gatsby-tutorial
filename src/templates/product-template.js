import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/Layout'
import Image from 'gatsby-image'

const ProductTemplate = ({ data }) => {
  const {product:{price,title,image:{fixed},info:{info}}} = data
  return <Layout>
    <div style={{textAlign:'center'}}>
      <Link to='/product'>back to product</Link>
      <h1>Single Product</h1>
    </div>
    <section className="single-product">
      <article>
        <Image fixed={fixed} alt={title}/>
      </article>
      <article>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <p>{info}</p>
        <button>add to cart</button>
      </article>
    </section>
  </Layout>
}

export const query = graphql`
query GetSingleProducts($slug:String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      image {
        fixed (width:300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ProductTemplate

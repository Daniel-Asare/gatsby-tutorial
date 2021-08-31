import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../images/image-1.jpg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image-3.jpeg"}) {
    childImageSharp {
      fixed(width:300,height:400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image-2.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  example:file(relativePath:{eq:"image-3.jpeg"}){
    childImageSharp{
       fluid(maxWidth:100){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data);
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} alt="im" width="100%" />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed}/>
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata:{
   title:'Gatsby Tutorial',
   description:'some random description',
   author:'@johndoe',
   data:['item 1', 'item 2'],
   person:{ name : 'peter', age: 23}
},
  
  plugins: ['gatsby-plugin-styled-components',
  `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
  {
  resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
  {
  resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/post/`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xkl3ctur59sq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN
      },
    }
],
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const queries = require("./src/constants/algolia")
module.exports = {
  siteMetadata: {
    title: `Design Shop`,
    description: `Gatsby Airtable Example. Built using Airtable, Algolia Search, Gatsby Background Image plugin and  React Context API. Containts two sliders, real-time Airtable updates and submenus. Styled using Styled-Components. `,
    author: `@johnsmilga`,
    titleTemplate: `%s | Gatsby - Airtable`,
    url: `https://gatsby.michalgrzegorczyk.pl/`,
    image: `mainBcg.png`,
    icon: `favicon.png`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: process.env.GATSBY_AIRTABLE_NAME,
            mapping: { image: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: process.env.GATSBY_AIRTABLE_NAME_2,
            mapping: { image: `fileNode` }
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: process.env.GATSBY_AIRTABLE_NAME_3,
            mapping: { image: `fileNode` }
          }
        ]
      }
    }
  ],
}

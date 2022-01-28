import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, About, Projects, Survey, Slider } from '../components'

const HomePage = ({ data }) => {
  const { allAirtable, customers, survey } = data

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={allAirtable.nodes} title="latest projects" />
      <Survey survey={survey.nodes} />
      <Slider customers={customers.nodes} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
        id
      }
    }
    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 150
                  height: 150
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        id
      }
    }
    survey: allAirtable(filter: { table: { eq: "Survey" } }) {
      nodes {
        id
        data {
          name
          votes
        }
      }
    }
  }
`

export default HomePage

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Projects } from '../components'
import Seo from '../components/SEO'

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data

  return (
    <Wrapper>
      <Seo title="Projects" />
      <Layout>
        <Projects projects={projects} title="our projects" page />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
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
  }
`

export default ProjectsPage
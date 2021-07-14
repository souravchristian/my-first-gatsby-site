import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {/* {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      } */}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          slug
          title(format: RENDERED)
          content(format: RENDERED)
        }
      }
    }
  }
`

export default BlogPage
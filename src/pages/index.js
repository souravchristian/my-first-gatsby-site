import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"


export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h4>This is Home Page</h4>
        <div>
          {/* <p>{node.title}</p> */}
        </div>
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
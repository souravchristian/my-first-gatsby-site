import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"


export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h4>Posts</h4>
        <div>
          {/* <p>{node.title}</p> */}
        </div>
    </Layout>
  )
}


export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
}`
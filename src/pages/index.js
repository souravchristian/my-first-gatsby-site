import React from "react"
import { graphql } from "gatsby"
import Header from "../components/layout"
import Blank from "../components/blank"
// import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';


export default ({ data }) => {
  console.log(data.wpgraphql.posts);
  return (
    <div>
    <Header />      
    {/* Welcome */}
    <ul>
      {
        // data.wpgraphql.posts.nodes.map(node => node.title==="Home" ? (
          data.wpgraphql.posts.nodes.map(node => (
          <li key={node.title}>
            This is wordpress {node.title} Page.<br/>
            <div dangerouslySetInnerHTML={{ __html: node.content }} />

            {/* {node.content} */}
          </li>
        )
          )}
      </ul>
    </div>
    // <Layout>
      
    // </Layout>
  )
}


export const query = graphql`
  query {
    wpgraphql {
      posts(where: {title: "home"}) {
        nodes {
          slug
          title(format: RENDERED)
          content(format: RENDERED)
        }
      }
    }
  }
`
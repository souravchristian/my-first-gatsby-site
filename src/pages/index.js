import React from "react"
import { graphql } from "gatsby"
import Header from "../components/layout"
import Footer from "../components/footer"
import Blank from "../components/blank"
import 'bootstrap/dist/css/bootstrap.min.css';


export default ({ data }) => {
  console.log(data.wpgraphql.posts);
  return (
    <div>
    <Header />      
    <ul>
      {
          data.wpgraphql.posts.nodes.map(node => (
          <li key={node.title}>
            This is wordpress {node.title} Page.<br/>
            <div dangerouslySetInnerHTML={{ __html: node.content }} />
          </li>
        ))}
      </ul>
    <Footer />
    </div>
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
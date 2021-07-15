import * as React from 'react'
import { graphql } from "gatsby"
import Header from '../components/layout'
import Footer from '../components/footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Blank from "../components/blank"

const AboutPage = ({ data }) => {
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
        )
          )}
      </ul>
    <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      posts(where: {title: "about"}) {
        nodes {
          slug
          title(format: RENDERED)
          content(format: RENDERED)
        }
      }
    }
  }
`

export default AboutPage


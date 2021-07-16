import * as React from 'react'
import { graphql } from "gatsby"
import Header from '../components/layout'
import Footer from '../components/footer'

const AboutPage = ({ data }) => {
  console.log(data.wpgraphql.pages);
  return (
    <div>
    <Header />      
      {
          data.wpgraphql.pages.nodes.map(node => (
          <li key={node.title}>
            This is wordpress {node.title} Page.<br/>
            <div dangerouslySetInnerHTML={{ __html: node.content }} />
          </li>
        )
          )}
    <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      pages(where: {title: "about"}) {
        nodes {
          id
          title(format: RENDERED)
          content(format: RENDERED)
        }
      }
    }
  }
`

export default AboutPage


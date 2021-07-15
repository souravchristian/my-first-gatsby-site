import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/layout'

const ContactPage = ({ data }) => {
    console.log(data.wpgraphql.pages.nodes);
  return (
    <div>
    <Header />      
    {/* Welcome */}
    <ul>
      {
          data.wpgraphql.pages.nodes.map(node => (
          <li key={node.title}>
            This is wordpress {node.title} Page.<br/>
            <div dangerouslySetInnerHTML={{ __html: node.content }} />

          </li>
        )
          )}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      pages(where: {title: "contact"}) {
        nodes {
          id
          content
          title
        }
      }
    }
  }
`

export default ContactPage
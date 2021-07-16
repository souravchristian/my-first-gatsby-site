import * as React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/layout'

const CaroUsel = ({data}) => {
console.log(data);
  var regex = /(<([^>]+)>)/ig;
    return (
      
        <div>
    <Header />      
    <ul>
      {
          data.wpgraphql.pages.nodes.map(node => (
          <li key={node.title}>
            This is wordpress {node.title} Page.<br/>
            
            <div dangerouslySetInnerHTML={{ __html: node.content.replace(<p></p>, '') }} />

          </li>
        )
          )}
      </ul>
    </div>
    );
};


export const query = graphql`
  query {
    wpgraphql {
      pages(where: {title: "carousel"}) {
        nodes {
          id
          content
          title
        }
      }
    }
  }
`
export default CaroUsel;
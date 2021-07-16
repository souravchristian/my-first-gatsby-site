import React from 'react';
import { graphql } from 'gatsby'
import Header from '../components/layout'
import Footer from '../components/footer'

const login = ({data}) => {
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
    );
};
export const query = graphql`
  query {
    wpgraphql {
      pages(where: {title: "login"}) {
        nodes {
          id
          content
          title
        }
      }
    }
  }
`
export default login;
module.exports = {
  siteMetadata: {
    title: `Sourav`,
    description: `Welcome.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [    
    {
    resolve: `gatsby-source-graphql`,
    options:{
      typeName: `WPGraphQL`,
      fieldName: `wpgraphql`,
      url:  `http://localhost/wordpress/graphql`
    }
    }
  ],
}

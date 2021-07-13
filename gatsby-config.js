module.exports = {
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}


// module.exports = {
//   siteMetadata: {
//     siteUrl: "https://www.yourdomain.tld",
//     title: "Sourav Christian",
//   },
//   plugins: ["gatsby-plugin-gatsby-cloud"],
// };

// service apache2 stop
// service mysql stop
// sudo /opt/lampp/lampp start

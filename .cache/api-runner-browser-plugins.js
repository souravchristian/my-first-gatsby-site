module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"http://localhost/wordpress/graphql","schema":{"typePrefix":"Wp","queryDepth":15,"circularQueryLimit":5,"timeout":30000,"perPage":100,"requestConcurrency":15,"previewRequestConcurrency":5},"develop":{"hardCacheMediaFiles":true,"nodeUpdateInterval":5000,"hardCacheData":false},"type":{"Post":{"limit":50},"RootQuery":"{ excludeFieldNames: ['viewer', 'node', 'schemaMd5'], },"},"verbose":true},
    }]

module.exports = {
  siteMetadata: {
    title: `Kamarikuoro Kaamos`,
    description: `Kaamos on vuonna 2007 perustettu helsinkiläinen kamarikuoro, jota johtaa Visa Yrjölä.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

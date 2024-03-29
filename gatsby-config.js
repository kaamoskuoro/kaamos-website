module.exports = {
  siteMetadata: {
    title: `Kamarikuoro Kaamos`,
    description: `Kaamos on vuonna 2007 perustettu helsinkiläinen kamarikuoro, jota johtaa Visa Yrjölä.`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kamarikuoro Kaamos`,
        short_name: `Kaamos`,
        lang: `fi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3ca2d5`,
        display: `minimal-ui`,
        icon: `src/images/gasp.svg`,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `Kaamos CMS`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}

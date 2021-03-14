require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `回歸到遊戲的開發`,
    author: `ApprenticeGC`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ApprenticeGC`,
      },
      {
        name: `github`,
        url: `https://github.com/GiantCroissant`,
      },
    ],
  },
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://spookyswap-support-guide.pages.dev/",
    title: "Spookyswap Thoubleshooting",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

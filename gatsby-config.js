module.exports = {
  siteMetadata: {
    title: 'Black Music CD Review',
    description: 'CD review for Soul and Hip-Hop Music',
    keywords: 'CD,CD Review,Black Music,Soul,Hip-Hop',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
          iconPath: "./src/images/music.svg"
          },
      },
    },
  ],
};

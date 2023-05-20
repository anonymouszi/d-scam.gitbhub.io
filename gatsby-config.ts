import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Driver's License Fixers Scammers in Philippines`,
    siteUrl: `https://anonymouszi.github.io/d-scam.gitbhub.io/`,
    description: `List of existing driver's license scammers and fixers in Philippiines found on Facebook Marketplace.`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-react-helmet"],
};

export default config;

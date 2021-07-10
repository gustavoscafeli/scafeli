module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
};

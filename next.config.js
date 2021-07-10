module.exports = {
  images: {
    domains: ["images.unsplash.com", "instagram.fcaw1-1.fna.fbcdn.net"],
  },
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
};

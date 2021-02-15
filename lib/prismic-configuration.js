import Prismic from "prismic-javascript";

export const linkResolver = (doc) => {
  // Pretty URLs for known types
  if (doc.type === "blog") return `/post/${doc.uid}`;
  if (doc.type === "page") return `/${doc.uid}`;
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`;
};

// Prismic API endpoint
// export const apiEndpoint = process.env.PRISMIC_URL;

export const apiEndpoint = "https://blogscafeli.cdn.prismic.io/api/v2";

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken });

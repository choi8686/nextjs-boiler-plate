/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
// const path = require('path');
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NODE_ENV === "production" //process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PRO_REST_API
        : process.env.NEXT_DEV_REST_API,
  },
  images: {
    // minimumCacheTTL: 31536000,
    domains: [
      "localhost",
      "via.placeholder.com",
      "jsonplaceholder.typicode.com",
    ],
    disableStaticImages: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/getdata",
        destination: "https://jsonplaceholder.typicode.com/todos",
      },
    ];
  },
};

module.exports = withPlugins([[withImages]], nextConfig);

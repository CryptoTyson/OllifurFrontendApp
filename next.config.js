const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack: config => config,
});

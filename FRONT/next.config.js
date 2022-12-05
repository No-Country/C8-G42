/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "loremflickr.com",
      "images.unsplash.com",
      "images.dog.ceo",
    ],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

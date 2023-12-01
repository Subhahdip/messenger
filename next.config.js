/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     remotePatterns: [
  //       "res.cloudinary.com",
  //       "avatars.githubusercontent.com",
  //       "lh3.googleusercontent.com",
  //     ],
  //   },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;

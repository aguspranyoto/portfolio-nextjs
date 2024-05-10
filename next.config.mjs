/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     domains: ["placehold.co"],
  //   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // port: '',
        // pathname: '',
      },
    ],
  },
};

export default nextConfig;

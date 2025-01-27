/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/zadira-nextjs",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/lubov-nefed/ajax-training/main/images/zadira/**",
      },
    ],
  },
};
export default nextConfig;

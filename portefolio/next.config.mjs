/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		middlewarePrefetch: true, // utile pour précharger avec middleware
	},
};

export default nextConfig;

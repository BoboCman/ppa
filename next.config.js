/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    webpack: (config) => {
        config.externals = [...config.externals, 'chrome-aws-lambda'];
        return config;
    }
};

module.exports = nextConfig; 
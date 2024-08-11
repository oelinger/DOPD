const stylexPlugin = require('@stylexjs/nextjs-plugin');
const babelrc = require('./.babelrc.js');

const plugins = babelrc.plugins;
const [_name, options] = plugins.find((plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin');
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

// Define your Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'r2.oelinger.at',
            },
        ],
    },
    headers: async () => {
        return [
            {
                source: '/r2.oelinger.at/(.*)',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://r2.oelinger.at/',
            },
        ];
    },
};

// Merge the stylexPlugin configuration with your Next.js configuration
module.exports = stylexPlugin({
    rootDir,
    useCSSLayers: true,
})(nextConfig);
